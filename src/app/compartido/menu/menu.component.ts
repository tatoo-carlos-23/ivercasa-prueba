import { EmitirService } from './../../service/emitir.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private _service:EmitirService
  ) { }

  ivercasa: string = '../../../assets/IMAGENESPRUEBAS/ivercasa_resposive_menu.svg'

  ngOnInit(): void {
  }

  cerrar_menu(){
     this._service.disparar_menu.emit(false)
  }

}
