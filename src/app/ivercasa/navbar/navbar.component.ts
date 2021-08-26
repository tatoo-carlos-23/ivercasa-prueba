import { EmitirService } from './../../service/emitir.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _Service:EmitirService
  ) { }

  ngOnInit(): void {
  }

  desplegar_menu(){
    this._Service.disparar_menu.emit(true)
  }

}
 