import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitirService {
  @Output() disparar_menu:EventEmitter<any> = new EventEmitter();

   
  constructor(

  ) { }
}
