import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart-orders/cart/cart.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './users/profile/profile.component';
import { OrdersComponent } from './cart-orders/orders/orders.component';
import { OrdersHistoryComponent } from './users/orders-history/orders-history.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { CartOrdersComponent } from './cart-orders/cart-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ProductsComponent,
    CartComponent,
    UsersComponent,
    ProfileComponent,
    OrdersComponent,
    OrdersHistoryComponent,
    ProductDetailsComponent,
    CartOrdersComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgbModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
