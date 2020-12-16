import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public rows = [
    { location: 'Name', producs: '10' },
    { location: 'Name', producs: '5' },
    { location: 'Name', producs: '14' },
    { location: 'Name', producs: '7' },
    { location: 'Name', producs: '20' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
