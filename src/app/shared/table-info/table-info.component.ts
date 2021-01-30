import { Component, Input, OnInit } from '@angular/core';

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
