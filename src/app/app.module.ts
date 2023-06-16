import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaComponent } from './pages/carga/carga.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { DCpropertiesComponent } from './pages/dcproperties/dcproperties.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    PropiedadesComponent,
    DCpropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }