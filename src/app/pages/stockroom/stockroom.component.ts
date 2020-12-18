import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header/header-title.service';

@Component({
  selector: 'app-stockroom',
  templateUrl: './stockroom.component.html',
  styleUrls: ['./stockroom.component.scss']
})
export class StockroomComponent implements OnInit {

  constructor(private headerTitleService: HeaderTitleService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Manage Stockroom Locations');
  }
}
