import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StockroomService } from '../stockroom.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProductsComponent implements OnInit {

  public data: any = [];
  public locations = ['Left Cabinet','Right Cabinet'];
  
  constructor(private stockroomService: StockroomService) { }


  ngOnInit(): void {  
    this.getProductDetails();
    this.data = [{locationName:'Product 1'},{locationName:'Product 2'},{locationName:'Product 3'},{locationName:'Product 4s'}, {locationName:'Product 5'}]
  }

  getProductDetails() {
    const payload = {
      userId : 64324,
      stockroomId : '8586'
    }

    this.stockroomService.getProductDetails(payload).subscribe((res: any) => {
      if (res && res.LocationList) {
        this.data = res.LocationList;
      }
    }, () => {

    })
  }

}