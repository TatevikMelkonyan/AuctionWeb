import { MaterialModule } from './../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { MatCheckboxModule } from '@angular/material';
import { CountDownComponent } from '../timer/timer.component';

@NgModule({
  declarations: [ProductDetailComponent, CountDownComponent],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    ProductDetailRoutingModule,        
    MaterialModule,
    MatCheckboxModule,
    
  ]  
})
export class ProductDetailModule { }
