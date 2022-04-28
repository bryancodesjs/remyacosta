import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DetallesComponent } from './views/detalles/detalles.component';
import { EditarComponent } from './views/editar/editar.component';
import { AgregarComponent } from './views/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallesComponent,
    EditarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
