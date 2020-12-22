import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StockroomService } from '../stockroom.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LocationsComponent implements OnInit {
  data: any = [];
  searchText: string = '';
  pageSize = 20;
  currentPage = 1;
  locations: any[] = [];

  locationName: string = '';
  addFlow: boolean = true;
  selectedIndex: number = 0;

  constructor(private stockroomService: StockroomService) { }

  ngOnInit(): void {
    this.onSearch();
  }

  onPageIndexChange(pageData: any) {
    console.log(pageData)
    this.data = pageData.pageOfItems;
    this.pageSize = pageData.pageSize;
    this.currentPage = pageData.currPage;
  }

  onSearch() {
    const payload = {
      locationName: this.searchText,
      stockroomId: '8525',
      userId: 64554,
    };
    this.stockroomService.viewLocation(payload).subscribe(
      (res: any) => {
        if (res && res.LocationList) {
          this.locations = res.LocationList;
        }
      },
      () => { }
    );
  }

  addLocation() {
    const payload = {
      locationName: this.locationName,
      stockroomId: '8525',
      userId: 64554,
    };
    this.stockroomService.createLocation(payload).subscribe(
      (res: any) => {
        this.locationName = '';
        this.onSearch();
      },
      () => { }
    );
  }

  getLocationList() {
    const payload = {
      locationName: "a",
      stockroomId: "8525",
      userId: 64554
    }

    this.stockroomService.getlocationDetails(payload).subscribe((res: any) => {
      if (res && res.LocationList) {
        this.data = res.LocationList;
      }
    }, () => {

    })
  }

  onEdit(index: number, isLocation: Boolean) {
    this.addFlow = false;
    this.selectedIndex = index;
  }

  onDelete(index: number) {
    const selectedRow = this.data[index];
    const payload = {
      locationId: selectedRow.locationId,
      stockroomId: '8525',
      userId: 64554,
    };
    this.stockroomService.deleteLocation(payload).subscribe(
      (res) => {
        this.onSearch();
      },
      () => { }
    );
  }

  updateLocation() {
    const selectedRow = this.data[this.selectedIndex];
    const payload = {
      locationId: selectedRow.locationId,
      locationName: this.locationName,
      stockroomId: '8525',
      userId: 64554,
    };
    this.stockroomService.updateLocation(payload).subscribe(
      (res) => {
        this.locationName = '';
        this.onSearch();
      },
      () => { }
    );
  }

  onAdd() {
    this.addFlow = true;
  }
}
