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
import { UsersService } from './services/users.service';
import { Products } from './services/products.service.service';
import { OrdersService } from './services/orders.service';
import { AuthenticationService } from './services/authentication.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RateCommentComponent } from './users/rate-comment/rate-comment.component';
import { UpdateOrderComponent } from './cart-orders/update-order/update-order.component';



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
    CartOrdersComponent,
    RateCommentComponent,
    UpdateOrderComponent
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
    NgxPaginationModule
  ],
  providers: [UsersService, Products, OrdersService, AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [RateCommentComponent, UpdateOrderComponent]
})
export class AppModule { }
