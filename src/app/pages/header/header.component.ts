import { Component, OnInit } from '@angular/core';
import { NAV_ITEMS } from 'src/app/config';
import { Nav } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItemList: Nav[] = NAV_ITEMS;
  itemIntex: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
  }

  selectNavItem(index:number):void {
      this.itemIntex = index;
  }



}
