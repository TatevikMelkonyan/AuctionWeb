import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../../services/auction.service';
import { Product } from '../models/product';



@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(private _auctionService: AuctionService) {

  }
  ngOnInit(): void {

  }
  productDetails(event, id) {

    this._auctionService.getProduct(id)
      .subscribe(x => {
        debugger
        this.product = x;

        //this.dataSource = new MatTableDataSource<Product>(this.products);

        //this.dataSource.paginator = this.paginator;
      });
  }
}
