import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  constructor(private _dataService:DataService) {

  }
  ngOnInit(): void {
    this._dataService.getProducts()
      .subscribe(x => {
        debugger
        this.products == x;
      })
       
    }

}
