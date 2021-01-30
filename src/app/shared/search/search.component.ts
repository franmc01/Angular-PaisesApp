import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() propagar = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  texto:string = '';

  buscar(){
    this.propagar.emit(this.texto);
  }
}
