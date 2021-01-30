import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais.model';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  consultarRegion(region: string) {
    if (region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPaisPorRegion(region).subscribe(lista => {
      this.paises = lista;
    })
  }

  aplicarClaseCondicional(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
