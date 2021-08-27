import { Component, OnInit } from '@angular/core';
import { EmitirService } from '../service/emitir.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  constructor(private _servicio: EmitirService) { }

  menu:boolean = false

  ngOnInit(): void {
    this._servicio.disparar_menu.subscribe(e => {
      this.menu = e;
    })
  }


  cerrar_menu(){
    this._servicio.disparar_menu.emit(false)
  }

}
