import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderTitleService } from './services/header/header-title.service';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'stockroom',
    loadChildren: () =>
      import('./pages/stockroom/stockroom.module').then(
        (m) => m.StockRoomModule
      )
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeaderTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
