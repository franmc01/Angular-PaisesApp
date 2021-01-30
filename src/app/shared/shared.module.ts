import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { TableInfoComponent } from './table-info/table-info.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SidebarComponent, SearchComponent, TableInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    SidebarComponent,
    SearchComponent,
    TableInfoComponent

  ]
})
export class SharedModule { }
