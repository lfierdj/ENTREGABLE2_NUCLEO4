import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-autos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalles-autos.component.html',
  styleUrl: './detalles-autos.component.css'
})
export class DetallesAutosComponent {
  servicio = inject (AutoService)
  router = inject(ActivatedRoute);

  autos: any;

  ngOnInit() {
    this.router.params.subscribe(id => {
      this.servicio.getIDAuto(id['idAutos']).subscribe(a=>{
        this.autos = a
      });
    });
  }
}
