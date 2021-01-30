import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../pais/models/pais.model';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent implements OnInit {

  @Input() listapaises:Pais[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
