import { IvercasaService } from './../../service/ivercasa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedades-destacadas',
  templateUrl: './propiedades-destacadas.component.html',
  styleUrls: ['./propiedades-destacadas.component.css']
})
export class PropiedadesDestacadasComponent implements OnInit {

  constructor(
    private _service:IvercasaService
  ) { }

  ngOnInit(): void {
    this.listar_items(true)
  }

  datos:any = []


  listar_items(valor:boolean){

    this._service.listar()
    .then((e:any)=>{
      
      if(valor == true){
        this.datos = e['casas'].slice(0,3)
      }else{
        this.datos = e['casas']
      }
      console.log(this.datos)
    })
    .catch((e:any)=>{
      console.log(e)
    });

  }



}
