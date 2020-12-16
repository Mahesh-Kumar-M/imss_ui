import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StockroomComponent } from './stockroom.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [{
  path: '',
  component: StockroomComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'locations'
  },
  {
    path: 'locations',
    component: LocationsComponent
  }
  ]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StockroomRoutingModule { }
