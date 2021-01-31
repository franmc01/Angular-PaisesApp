import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais.model';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  hayError:boolean = false;
  mostraSuge:boolean=false;
  term:string = '';
  paises:Pais[]=[];
  paisesSugeridos:Pais[]=[];
  placeholder = 'Ingrese el nombre del pais que desea buscar...';

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
    this.mostraSuge = true;
    this.term=termino;
    this.paisService.buscarPorPais(termino)
                    .subscribe(lista=>this.paisesSugeridos=lista.splice(0,5),
                    (error)=>this.paisesSugeridos=[]);
  }


  buscarSugerido(termino:string){
    this.BuscarService(termino);
    this.mostraSuge = false;
  }

}
