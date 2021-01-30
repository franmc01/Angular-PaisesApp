import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  hayError:boolean = false;
  term:string = '';
  paises:Pais[]=[];
  placeholder = 'Ingrese la capital del pais que desea buscar...';

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  BuscarService(termino:string){
    this.hayError = false;
    this.term= termino;
    this.paisService.buscarPorCapital(termino).subscribe((resp)=>{
      this.paises = resp;
    },(err)=>{
      this.hayError=true;
      this.paises=[];
    })
  }
}


