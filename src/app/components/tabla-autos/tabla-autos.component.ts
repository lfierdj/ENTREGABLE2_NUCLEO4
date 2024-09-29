import { Component, inject } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-autos',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla-autos.component.html',
  styleUrl: './tabla-autos.component.css'
})
export class TablaAutosComponent {
  servicio = inject(AutoService)
  carros : any
  ngOnInit(){
    this.servicio.getAutos().subscribe(p=>(
      this.carros = p
    )

    )

  }

  eliminar(id:any){
    this.servicio.deleteAuto(id).subscribe()
    window.location.reload()

  }
}
