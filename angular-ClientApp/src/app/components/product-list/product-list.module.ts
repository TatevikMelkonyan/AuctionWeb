import { MaterialModule } from './../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { CountDownComponent } from '../timer/timer.component';

@NgModule({
  declarations: [ProductListComponent,
    CountDownComponent],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    ProductListRoutingModule,        
    MaterialModule
  ]
})
export class ProductListModule { }
