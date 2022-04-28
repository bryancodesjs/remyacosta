import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './views/agregar/agregar.component';
import { DetallesComponent } from './views/detalles/detalles.component';
import { EditarComponent } from './views/editar/editar.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'detalles', component: DetallesComponent},
  {path:'editar', component: EditarComponent},
  {path: 'agregar', component: AgregarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
