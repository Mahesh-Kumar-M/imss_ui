import { Component, OnInit } from '@angular/core';
import { DashboardItemDetails, DASHBOARD_ITEM_LISTS, HEADER_ITEM_LISTS } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardLists: DashboardItemDetails[] = DASHBOARD_ITEM_LISTS;
  headerConfigLists: DashboardItemDetails[] = HEADER_ITEM_LISTS;

  constructor() { }

  ngOnInit(): void {
  }

}
