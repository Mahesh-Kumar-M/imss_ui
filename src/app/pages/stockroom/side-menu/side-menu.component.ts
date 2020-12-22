import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SideMenuComponent implements OnInit {
  public menuItems = [
    { icon: 'fas fa-flask fa-2x', name: 'Stockroom Products', link: 'products' },
    { icon: 'fas fa-calculator fa-2x', name: 'Take Inventory', link: 'inventory' },
    { icon: 'fas fa-archive fa-2x', name: 'Stockroom Locations', link: 'locations' },
    { icon: 'fas fa-book fa-2x', name: 'Activity Log', link: 'activityLog' },
    { icon: 'fa fa-cog fa-2x', name: 'Stockroom Settings', link: 'settings' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
