import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  consultarRegion(region:string){
    this.regionActiva = region;
  }

}
