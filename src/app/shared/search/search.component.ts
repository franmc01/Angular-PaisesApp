import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() propagar = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  @Input() placeText:string = '';

  debouncer:Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(valor=>{
      this.onDebounce.emit(valor);
    })
  }

  texto:string = '';

  buscar(){
    this.propagar.emit(this.texto);
  }
  teclaPresionada(){
    this.debouncer.next(this.texto);
  }
}
