import { Action } from "@ngrx/store";
import { Product } from "../../auction/models/product";
import { IPaginator } from "../../models/paginator.interface";

export enum AuctionActionTypes {
  GetProducts = '[Auction] Get Products',
  GetProductsSuccess = '[Auction] Get Products Success',
  SearchProduct = '[Auction] Search Product',
  ChangePaginator = '[Auction] Change Paginator',
  GetProduct = '[Auction] Get Product',
  GetProductSuccess = '[Auction] Get Product Success',
  SubmitProduct = '[Product] Submit Product',
  SubmitProductSuccess = '[Auction] Submit Product Success'

}

export class GetProducts implements Action {
  public readonly type = AuctionActionTypes.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = AuctionActionTypes.GetProductsSuccess;
  constructor(public payload: IPaginator<Product>) { }
}

export class SearchProduct implements Action {
  public readonly type = AuctionActionTypes.SearchProduct;
  constructor(public payload: string) { }
}

export class ChangePaginator implements Action {
  public readonly type = AuctionActionTypes.ChangePaginator;
  constructor(public payload: any) { }
}

export class GetProduct implements Action {
  public readonly type = AuctionActionTypes.GetProduct;
  constructor(public payload: number) { }
}

export class GetProductSuccess implements Action {
  public readonly type = AuctionActionTypes.GetProductSuccess;
  constructor(public payload: Product) { }

}

export class SubmitProduct implements Action {
  public readonly type = AuctionActionTypes.SubmitProduct;
  constructor(public payload: any) { }
}

export class SubmitProductSuccess implements Action {
  public readonly type = AuctionActionTypes.SubmitProductSuccess;
  constructor(public payload: string) { }
}

export type AuctionActions =
  | GetProducts
  | GetProductsSuccess
  | SearchProduct
  | ChangePaginator
  | GetProduct
  | GetProductSuccess

