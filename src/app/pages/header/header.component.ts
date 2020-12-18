import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NAV_ITEMS } from 'src/app/config';
import { Nav } from 'src/app/models';
import { HeaderTitleService } from 'src/app/services/header/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItemList: Nav[] = NAV_ITEMS;
  itemIntex: number = 0;
  headerTitle = '';

  constructor(private headerTitleService: HeaderTitleService) { 
  }

  ngOnInit(): void {
     this.headerTitleService.title.subscribe( (updatedTitle) => {
       this.headerTitle = updatedTitle;
     })
  }

  selectNavItem(index:number):void {
      this.itemIntex = index;
  }
}
