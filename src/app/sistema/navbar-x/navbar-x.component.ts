import { Component, OnInit } from '@angular/core';
import { EmitirService } from 'src/app/service/emitir.service';

@Component({
  selector: 'app-navbar-x',
  templateUrl: './navbar-x.component.html',
  styleUrls: ['./navbar-x.component.css']
})
export class NavbarXComponent implements OnInit {
  constructor(
    private _Service:EmitirService
  ) { }

  ngOnInit(): void {
  }

  desplegar_menu(){
    this._Service.disparar_menu.emit(true)
  }
}
