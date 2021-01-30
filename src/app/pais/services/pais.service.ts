import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.eu/rest/v2'

  constructor(private http:HttpClient) { }

  buscarPorPais(termino:string){
    const url = `${this.apiUrl}/name/${termino}`;
    console.log(url);
    return this.http.get<Pais[]>(url);
  }
}
