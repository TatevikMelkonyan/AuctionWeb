import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../auction/models/product';
import { Observable, of } from 'rxjs';
import { IPaginator } from '../models/paginator.interface';
import { mergeMap } from 'rxjs/operators';
import { HttpHelper } from '../helpers/http.helper';

@Injectable()
export class AuctionService {

  private url = "https://localhost:44309/api/products";

  constructor(private httpClient: HttpClient) {
  }

  //getProducts() {
  //  return this.httpClient.get(this.url);
  //}

  
  public getProducts(searchTerm: string, pageIndex: number, pageSize: number): Observable<IPaginator<Product>> {
    const params = HttpHelper.getPaginatorParams(searchTerm, pageIndex, pageSize);
    return this.httpClient.get<IPaginator<Product>>(this.url, { params: params }).pipe(
      mergeMap(data => {
        return of(data);
      })
    );
  }

  getProduct(id: number) {
    return this.httpClient.get(this.url + '/' + id);
  }


 
}
