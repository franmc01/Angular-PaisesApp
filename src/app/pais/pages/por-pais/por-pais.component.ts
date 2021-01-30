import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  hayError:boolean = false;
  term:string = '';
  paises:Pais[]=[];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  BuscarService(termino: string) {
    this.hayError=false;
    this.term = termino;
    this.paisService.buscarPorPais(termino).subscribe((resp) => {
      this.paises =resp;
    }, (error) => {
      this.hayError=true;
      this.paises = [];
    })
  }

  mostrarSugerencias(termino:string){
    this.hayError = false;
    //TODO: Mostrar sugerencias
  }

}
