import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockroomRoutingModule } from './stockroom.routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { StockroomComponent } from './stockroom.component';
import { LocationsComponent } from './locations/locations.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    SideMenuComponent,
    SubHeaderComponent,
    StockroomComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    StockroomRoutingModule,
    NgxDatatableModule
  ]
})
export class StockRoomModule { }
