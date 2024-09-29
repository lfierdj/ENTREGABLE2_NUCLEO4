import { Component } from '@angular/core';

import { TablaAutosComponent } from '../../components/tabla-autos/tabla-autos.component';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [TablaAutosComponent],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {

}
