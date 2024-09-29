import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoService } from '../../services/auto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
id : any;
nombre : any;
modelo : any;
marca : any;
precio : any;
color : any;
duenos_anteriores: string[] = [];
imagen : any;

autos: any;
route = inject (Router)
ruta = inject (ActivatedRoute)
servicio = inject (AutoService)


//PARA GUARDAR NUEVOS DATOS
guardar (datos:any){
  this.servicio.postAuto(datos.value).subscribe()
  this.route.navigateByUrl("Inicio")
}

ngOnInit() {
this.servicio.getAutos().subscribe(p => (
  this.autos=p
))

}
}
