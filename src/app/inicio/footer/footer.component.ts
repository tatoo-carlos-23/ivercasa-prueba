import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  lista:any [] = [
    {"nombre":"ic@ivercasa.com"},
    {"nombre":"https://www.ivercasa.com"},
    {"nombre":"958 123 123 - "},
    {"nombre":"Acera del Darro 10, 2ª planta Granada 18005"},
    {"nombre":"(Granada)"},
  ]

  condic:any[] = [
    {clase: "cond1", nombre:"Términos y condiciones"},
    {clase: "cond2", nombre:"Política de privacidad"},
    {clase: "cond3", nombre:"©2020 IVERCASA"},
    {clase: "cond4", nombre:"Todos los derechos reservados"},
  ]



}
 