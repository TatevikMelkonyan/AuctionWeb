import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductComponent } from './component/product.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
   ProductComponent

  ],
  imports: [

  ],
  providers: [DataService]
})
export class ProductModule implements OnInit {

  constructor() {

  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
