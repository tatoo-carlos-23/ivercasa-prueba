import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { FooterComponent } from './footer/footer.component';
import { CasadetussuenosComponent } from './casadetussuenos/casadetussuenos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PropiedadDestacadaComponent } from './propiedad-destacada/propiedad-destacada.component';
import { ValorPropiedadComponent } from './valor-propiedad/valor-propiedad.component';


@NgModule({
  declarations: [
    InicioComponent,
    FooterComponent,
    CasadetussuenosComponent,
    NoticiasComponent,
    PropiedadDestacadaComponent,
    ValorPropiedadComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
