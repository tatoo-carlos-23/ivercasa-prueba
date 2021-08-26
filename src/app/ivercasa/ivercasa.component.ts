import { EmitirService } from './../service/emitir.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ivercasa',
  templateUrl: './ivercasa.component.html',
  styleUrls: ['./ivercasa.component.css']
})
export class IvercasaComponent implements OnInit {

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
