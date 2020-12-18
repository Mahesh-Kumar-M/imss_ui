import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockroomRoutingModule } from './stockroom.routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { StockroomComponent } from './stockroom.component';
import { LocationsComponent } from './locations/locations.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SideMenuComponent,
    SubHeaderComponent,
    StockroomComponent,
    LocationsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    StockroomRoutingModule,
    NgxDatatableModule,
    FormsModule,
    SharedModule
  ]
})
export class StockRoomModule { }
