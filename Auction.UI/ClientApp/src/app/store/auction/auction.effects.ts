import { Injectable } from "@angular/core";
import { AuctionActionTypes, GetProducts, GetProductsSuccess, SearchProduct, SubmitProduct, SubmitProductSuccess } from "./auction.actions";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { debounceTime, distinctUntilChanged, map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import { paginator, searchTerm } from "./auction.selector";
import { IPaginator } from "../../models/paginator.interface";
import { Product } from "../../auction/models/product";
import { of } from "rxjs";
import { AuctionService } from "../../services/auction.service";
import { IAppState } from "../app/app.state";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class AuctionEffects {

  @Effect()
  getProducts$ = this.actions$.pipe(
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

  @Effect()
  searchProduct$ = this.actions$.pipe(
    ofType<SearchProduct>(AuctionActionTypes.SearchProduct),
    debounceTime(300),
    distinctUntilChanged(),
    map(action => action.payload),
    withLatestFrom(
      this.store.pipe(select(paginator))
    ),
    switchMap(([searchTerm, paginator]) => {
      return this.productService.getProducts("", 1, 5);
    }),
    switchMap((paginator: IPaginator<Product>) => {
      return of(new GetProductsSuccess(paginator));
    })
  );

  //@Effect()
  //submitProduct$ = this.actions$.pipe(
  //  ofType<SubmitProduct>(AuctionActionTypes.SubmitProduct),
  //  map(action => action.payload),
  //  switchMap(payload => {
  //    return this.productService.submit(payload.id, payload.categoryName, payload.name, payload.description, payload.price, payload.image);
  //  }),
  //  switchMap((event: HttpEvent<any>) => {
  //    switch (event.type) {
  //      case HttpEventType.UploadProgress:
  //        return of(new ChangeProgress(Math.round(event.loaded / event.total * 100)));
  //      case HttpEventType.Response:
  //        return [new SubmitProductSuccess(event.body.message), new GetProducts()];
  //      default:
  //        return of();
  //    }
  //  })
  //);

  @Effect({ dispatch: false })
  submitProductSuccess$ = this.actions$.pipe(
    ofType<SubmitProductSuccess>(AuctionActionTypes.SubmitProductSuccess),
    map(action => action.payload),
    tap(payload => {
      this.snackBar.open(payload, 'OK', { duration: 3000 });
    }),
  );


  constructor(
    private productService: AuctionService,
    private actions$: Actions,
    private store: Store<IAppState>,
    private snackBar: MatSnackBar,
  ) { }
}
