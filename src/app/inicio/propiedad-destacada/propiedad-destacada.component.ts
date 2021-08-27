import { Component, OnInit } from '@angular/core';
import { IvercasaService } from 'src/app/service/ivercasa.service';

@Component({
  selector: 'app-propiedad-destacada',
  templateUrl: './propiedad-destacada.component.html',
  styleUrls: ['./propiedad-destacada.component.css']
})
export class PropiedadDestacadaComponent implements OnInit {
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
 