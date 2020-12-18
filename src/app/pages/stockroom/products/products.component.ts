import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProductsComponent implements OnInit {

  public data: any = [];
  public locations = ['Left Cabinet','Right Cabinet'];
  
  constructor() { }

  ngOnInit(): void {  
  }

}