import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class IvercasaService {

  constructor(private http:HttpClient) { }

  ruta:string = '../../assets/listas.json';

  async listar(){
    return await this.http.get(this.ruta).toPromise()
  }
}
