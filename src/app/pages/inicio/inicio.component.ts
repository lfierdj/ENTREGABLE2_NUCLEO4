import { Component } from '@angular/core';
import { ListaAutosComponent } from "../../components/lista-autos/lista-autos.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ListaAutosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
