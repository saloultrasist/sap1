import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DCpropertiesComponent } from './pages/dcproperties/dcproperties.component';
import { CargaComponent } from './pages/carga/carga.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

const routes: Routes = [
  {path:'dcproperties',component:DCpropertiesComponent},
  {path:'carga',component:CargaComponent},
  {path:'propiedades',component:PropiedadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }