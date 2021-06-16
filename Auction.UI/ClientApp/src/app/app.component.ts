import { Component, OnInit } from '@angular/core';
import { Product } from './product/product';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  product: Product = new Product();  
  products: Product[];              
  tableMode: boolean = true;
  constructor(private dataService: DataService) { }

  ngOnInit() {
 /*   this.loadProducts();*/
  }

  //loadProducts() {
  //  this.dataService.getProducts()
  //    .subscribe((data: Product[]) => this.products = data);
  //}
}
