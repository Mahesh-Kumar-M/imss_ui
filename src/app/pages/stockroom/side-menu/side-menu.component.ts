import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public menuItems = [
    { icon: 'fas fa-flask fa-2x', name: 'Stockroom Products', link: '' },
    { icon: 'fas fa-calculator fa-2x', name: 'Take Inventory', link: '' },
    { icon: 'fas fa-archive fa-2x', name: 'Stockroom Locations', link: '' },
    { icon: 'fas fa-book fa-2x', name: 'Activity Log', link: '' },
    { icon: 'fa fa-cog fa-2x', name: 'Stockroom Settings', link: '' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
