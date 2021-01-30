import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  hayError:boolean = false;
  term:string = '';
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  BuscarService(termino: string) {
    this.hayError=false;
    this.term = termino;
    this.paisService.buscarPorPais(termino).subscribe((resp) => {
      console.log(resp);
    }, (error) => {
      this.hayError=true;
    })
  }

}
