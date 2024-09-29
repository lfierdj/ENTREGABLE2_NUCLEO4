import { Component, ElementRef, inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AutoService } from '../../services/auto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-formulario.component.html',
  styleUrls: ['./editar-formulario.component.css']
})
export class EditarFormularioComponent {

  carros: any = {
    id: '',
    nombre: '',
    modelo: '',
    marca: '',
    precio: 0,
    color: '',
    duenos_anteriores: [],
    imagen: ''
  };

  nuevoDueno: string = '';
  servicio = inject(AutoService);
  route = inject(Router);
  ruta = inject(ActivatedRoute);
  listaElement: ElementRef;

  constructor(private el: ElementRef) {
    this.listaElement = el;
  }

  ngOnInit() {
    this.ruta.params.subscribe(p => {
      const id = p['idAutos'];
      this.servicio.getIDAuto(id).subscribe(auto => {
        this.carros = auto;
        this.renderizarDuenos();
      });
    });
  }

  agregarDueno() {
    if (this.nuevoDueno.trim()) {
      this.carros.duenos_anteriores.push(this.nuevoDueno);
      this.nuevoDueno = '';
      this.renderizarDuenos();
    }
  }

  // Método para renderizar manualmente la lista de dueños anteriores
  renderizarDuenos() {
    const listaDuenos = this.el.nativeElement.querySelector('#lista-duenos');
    listaDuenos.innerHTML = '';

    for (let dueno of this.carros.duenos_anteriores) {
      const li = document.createElement('li');
      li.textContent = dueno;
      listaDuenos.appendChild(li);
    }
  }

  editar(formulario: any) {
    if (formulario.valid) {
      this.servicio.putNosotros(this.carros).subscribe(() => {
        this.route.navigateByUrl("Inicio");
      });
    }
  }
}
