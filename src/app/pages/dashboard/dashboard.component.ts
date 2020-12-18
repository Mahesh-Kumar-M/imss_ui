import { Component, OnInit } from '@angular/core';
import { DashboardItemDetails, DASHBOARD_ITEM_LISTS, HEADER_ITEM_LISTS } from 'src/app/models/dashboard.model';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { HeaderTitleService } from 'src/app/services/header/header-title.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    
    legend: {
      display: false
    }
  };
  public pieChartLabels: Label[] = [[''], [''], ''];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  dashboardLists: DashboardItemDetails[] = DASHBOARD_ITEM_LISTS;
  headerConfigLists: DashboardItemDetails[] = HEADER_ITEM_LISTS;


  constructor(private headerTitleService: HeaderTitleService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Welcome, First LastName');
  }

}
