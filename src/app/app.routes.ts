import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AutosComponent } from './pages/autos/autos.component';
import { DetallesAComponent } from './pages/detalles-a/detalles-a.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EditarFormularioComponent } from './components/editar-formulario/editar-formulario.component';

export const routes: Routes = [{path: '',redirectTo:'Inicio',pathMatch:'full'},
  {path:"Inicio", component:InicioComponent},
  {path:"Autos", component:AutosComponent},
  {path:"detalles/:idAutos", component:DetallesAComponent},
  {path:"formulario", component:FormularioComponent},
  {path:"editar-formulario/:idAutos", component:EditarFormularioComponent},
];
