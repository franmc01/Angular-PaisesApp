import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  buscarPorPais(termino: string) {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarPorCapital(termino: string) {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarPaisPorCodigo(codigo: string) {
    const url = `${this.apiUrl}/alpha/${codigo}`;
    return this.http.get<Pais>(url);
  }

  buscarPaisPorRegion(region: string) {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }
}
