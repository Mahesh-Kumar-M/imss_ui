import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LocationsComponent implements OnInit {
  public data:any = [];
  public pageLimit:number = 20;
  public searchText:string='';

  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.getLocationList();
  }

  onSearch(){
    alert(this.searchText)
  }

  getLocationList(){
    const payload =  {
      locationName : "a",
        stockroomId : "8525",
      userId : 64554 
    }

    this.locationService.getlocationDetails(payload).subscribe((res:any)=>{
      if(res && res.LocationList){
        this.data =  res.LocationList;
        // this.calculatePagination();
        // this.data = [...this.data,...this.data,...this.data,...this.data,...this.data]
      }
    },()=>{

    })
  }

  onEdit(index:number, isLocation:Boolean){
    console.log(index)
  }

  onDelete(index:number){
    this.locationService.deleteLocation(this.data[index]).subscribe(res=>{
      console.log(res)
    },()=>{

    })
  }

  updateList(){
    this.locationService.deleteLocation(this.data).subscribe(res=>{
      console.log(res)
    },()=>{

    })
  }

  calculatePagination(){

  }
}
