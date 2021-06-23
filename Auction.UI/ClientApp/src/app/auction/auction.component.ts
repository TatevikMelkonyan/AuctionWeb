import { Component, OnInit, ViewChild } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { AuctionService } from "../services/auction.service";
import { Product } from "./models/product";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { IPaginator } from "../models/paginator.interface";
import { IAppState } from "../store/app/app.state";
import { paginator, searchTerm } from "../store/auction/auction.selector";
import { AuctionActionTypes, ChangePaginator, GetProducts, GetProductsSuccess } from "../store/auction/auction.actions";
import { Actions, ofType } from "@ngrx/effects";
import { MatSnackBar } from "@angular/material";
import { switchMap, withLatestFrom } from "rxjs/operators";

@Component({
  selector: 'auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  products: Product[] = [];
  public paginator$: Observable<IPaginator<Product>> = this.store.pipe(select(paginator));
  public searchTerm$: Observable<string> = this.store.pipe(select(searchTerm));

  constructor(
    private _auctionService: AuctionService,
    private store: Store<IAppState>,
    private productService: AuctionService,
    private actions$: Actions,
    private snackBar: MatSnackBar ) {
  }


  ngOnInit(): void {
    debugger;
    this.store.dispatch(new GetProducts());
    debugger;
    this.actions$.pipe(
      ofType<GetProducts>(AuctionActionTypes.GetProducts),
      withLatestFrom(
        this.store.pipe(select(searchTerm)),
        this.store.pipe(select(paginator))
      ),
      switchMap(([searchTerm, paginator]) => {
        return this.productService.getProducts("", 1, 5);
      }),
      switchMap((paginator: IPaginator<Product>) => {
        return of(new GetProductsSuccess(paginator));
      })
    );

    //this._auctionService.getProducts("", 1, 5);

    //this._auctionService.getProducts()
    //  .subscribe(x => {
    //    debugger
    //    this.products.push.apply(this.products, x);
    //  })
  }

  public getProducts(pageIndex: number, pageSize: number): void {
    this.store.dispatch(new ChangePaginator({ pageIndex: pageIndex, pageSize: pageSize }));
    this.store.dispatch(new GetProducts());
  }

  //productDetails(event, id) {

  //  this._auctionService.getProduct(id)
  //    .subscribe(x => {
  //      debugger
  //      this.products.push.apply(this.products, x);
  //      this.router.navigateByUrl('/auction');
  //      //this.dataSource = new MatTableDataSource<Product>(this.products);

  //      //this.dataSource.paginator = this.paginator;
  //    })

  //}
}


