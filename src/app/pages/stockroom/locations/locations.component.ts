import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LocationsComponent implements OnInit {

  public data: any = [];
  public pageLimit: number = 20;
  public searchText: string = '';
  public locationName: string = '';
  public addFlow: boolean = true;
  public selectedIndex: number = 0;
  
  
  public header: string = 'Manage1';

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    //this.getLocationList();
    this.onSearch();
  }

  onSearch() {
    const payload = {
      locationName: this.searchText,
      stockroomId: "8525",
      userId: 64554
    };
    this.locationService.viewLocation(payload).subscribe((res: any) => {
      if (res && res.LocationList) {
        this.data = res.LocationList;
      }
    }, () => {

    })
  }

  addLocation() {
    const payload = {
      locationName: this.locationName,
      stockroomId: "8525",
      userId: 64554
    };
    this.locationService.createLocation(payload).subscribe((res: any) => {
      this.locationName = '';
      this.onSearch();
    }, () => {

    })
  }

  // getLocationList() {
  //   const payload = {
  //     locationName: "a",
  //     stockroomId: "8525",
  //     userId: 64554
  //   }

  //   this.locationService.getlocationDetails(payload).subscribe((res: any) => {
  //     if (res && res.LocationList) {
  //       this.data = res.LocationList;
  //     }
  //   }, () => {

  //   })
  // }

  onEdit(index: number, isLocation: Boolean) {
    this.addFlow = false;
    this.selectedIndex = index;
  }

  onDelete(index: number) {
    const selectedRow = this.data[index];
    const payload = {
      locationId: selectedRow.locationId,
      stockroomId: "8525",
      userId: 64554
    };
    this.locationService.deleteLocation(payload).subscribe(res => {
      this.onSearch();
    }, () => {

    })
  }

  updateLocation() {
    const selectedRow = this.data[this.selectedIndex];
    const payload = {
      locationId: selectedRow.locationId,
      locationName: this.locationName,
      stockroomId: "8525",
      userId: 64554
    }
    this.locationService.updateLocation(payload).subscribe(res => {
      this.locationName = '';
      this.onSearch();
    }, () => {

    })
  }

  onAdd() {
    this.addFlow = true;
  }
}
