import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaComponent } from './sistema.component';
import { NavbarXComponent } from './navbar-x/navbar-x.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    SistemaComponent,
    NavbarXComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule
  ]
})
export class SistemaModule { }
