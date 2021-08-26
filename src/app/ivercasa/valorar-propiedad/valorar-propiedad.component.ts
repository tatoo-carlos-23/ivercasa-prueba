import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valorar-propiedad',
  templateUrl: './valorar-propiedad.component.html',
  styleUrls: ['./valorar-propiedad.component.css']
})
export class ValorarPropiedadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datos_in:any[] = [
    {clase:"btn-l item1 x-btn", vista:"Ciudad"},
    {clase:"btn-l item2 x-btn", vista:"Número de calle"},
    {clase:"btn-l item4 x-btn", vista:"0"},
    {clase:"btn-l item5 x-btn", vista:"Dormitorio"},
    {clase:"btn-l item6 x-btn", vista:"Ascensor"},
  ]

}
