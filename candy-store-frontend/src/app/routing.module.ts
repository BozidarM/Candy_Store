import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { CartOrdersComponent } from "./cart-orders/cart-orders.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsComponent } from "./products/products.component";
import { UsersComponent } from "./users/users.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const rute: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartOrdersComponent},
    {path: 'candies/candy/:id', component: ProductDetailsComponent},
    {path: 'users', component: UsersComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rute)
    ],

    exports:[
        RouterModule
    ]
})

export class RoutingModule {}