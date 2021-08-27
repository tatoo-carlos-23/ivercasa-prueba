import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropiedadDestacadasRoutingModule } from './propiedad-destacadas-routing.module';
import { PropiedadDestacadasComponent } from './propiedad-destacadas.component';


@NgModule({
  declarations: [
    PropiedadDestacadasComponent
  ],
  imports: [
    CommonModule,
    PropiedadDestacadasRoutingModule
  ]
})
export class PropiedadDestacadasModule { }
