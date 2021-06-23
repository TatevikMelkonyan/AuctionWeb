import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CommonModule } from '@angular/common';
import { AuctionService } from './services/auction.service';
import { AuctionComponent } from './auction/auction.component';
import { ProductDetailsComponent } from './auction/product-detailes/product-details.component';
import { CountDownComponent } from './auction/timer/timer.component';
import { MaterialModule } from './shared/material/material.module';
import { LoginModule } from './login/login.module';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './store/app/app.state';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AuctionComponent,
    ProductDetailsComponent,
    CountDownComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule,
    MaterialModule,
    LoginModule,
    StoreModule.forRoot(appReducers),

    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),

    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'auction', component: AuctionComponent },
      { path: 'productDetails', component: ProductDetailsComponent },
    ])
  ],
  providers: [AuctionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

