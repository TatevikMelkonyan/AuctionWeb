import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';

@Injectable()
export class DataService {

  private url = "https://localhost:44309/api/products";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

 
}
