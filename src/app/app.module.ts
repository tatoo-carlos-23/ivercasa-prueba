import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IvercasaComponent } from './ivercasa/ivercasa.component';
import { CasadetussuenosComponent } from './ivercasa/casadetussuenos/casadetussuenos.component';
import { FooterComponent } from './ivercasa/footer/footer.component';
import { NavbarComponent } from './ivercasa/navbar/navbar.component';
import { NoticiasComponent } from './ivercasa/noticias/noticias.component';
import { PropiedadesDestacadasComponent } from './ivercasa/propiedades-destacadas/propiedades-destacadas.component';
import { ValorarPropiedadComponent } from './ivercasa/valorar-propiedad/valorar-propiedad.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IvercasaComponent,
    CasadetussuenosComponent,
    FooterComponent,
    NavbarComponent,
    NoticiasComponent,
    PropiedadesDestacadasComponent,
    ValorarPropiedadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
