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
  public products: any = [];
  public locations = ['left', 'right'];
  pageSize = 20;
  currentPage = 1;

  constructor(private stockroomService: StockroomService) { }


  ngOnInit(): void {
    this.getProductDetails();
    const data = [
      { catalogNo: 'Product 1', productId: 75800 - 250, location: 'Left Cabinet', reorderPoint: 5, max_qty: 50, currentInventory: 15, status: 0 },
      { catalogNo: 'Product 2', productId: 75800 - 251, location: 'Left Cabinet', reorderPoint: 15, max_qty: 60, currentInventory: 30, status: 1 },
      { catalogNo: 'Product 3', productId: 75800 - 252, location: 'Right Cabinet', reorderPoint: 34, max_qty: 20, currentInventory: 15, status: 1 },
      { catalogNo: 'Product 4', productId: 75800 - 253, location: 'Left Cabinet', reorderPoint: 4, max_qty: 40, currentInventory: 45, status: 0 },
      { catalogNo: 'Product 5', productId: 75800 - 254, location: 'Right Cabinet', reorderPoint: 5, max_qty: 50, currentInventory: 66, status: 0 },
      { catalogNo: 'Product 6', productId: 75800 - 255, location: 'Left Cabinet', reorderPoint: 6, max_qty: 80, currentInventory: 44, status: 1 },
      { catalogNo: 'Product 7', productId: 75800 - 256, location: 'Right Cabinet', reorderPoint: 7, max_qty: 90, currentInventory: 5, status: 1 },
      { catalogNo: 'Product 8', productId: 75800 - 257, location: 'Left Cabinet', reorderPoint: 23, max_qty: 20, currentInventory: 53, status: 0 },
      { catalogNo: 'Product 9', productId: 75800 - 258, location: 'Right Cabinet', reorderPoint: 53, max_qty: 40, currentInventory: 66, status: 1 },
      { catalogNo: 'Product 10', productId: 75800 - 259, location: 'Right Cabinet', reorderPoint: 9, max_qty: 60, currentInventory: 15, status: 0 },
    ]
    this.products = [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data];
    this.data = JSON.parse(JSON.stringify(this.products));
  }

  onPageIndexChange(pageData: any) {
    console.log(pageData)
    this.data = pageData.pageOfItems;
    this.pageSize = pageData.pageSize;
    this.currentPage = pageData.currPage;
  }

  getProductDetails() {
    const payload = {
      locationId: 12904,
      userId: 64324,
      stockroomId: '8586'
    }

    this.stockroomService.getProductDetails(payload).subscribe((res: any) => {
      if (res && res.LocationList) {
        this.data = res.LocationList;
      }
    }, () => {

    })
  }

}