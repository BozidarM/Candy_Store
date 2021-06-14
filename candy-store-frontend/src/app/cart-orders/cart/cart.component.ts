import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Orders, OrdersService } from '../../services/orders.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products, QuanDeleteCart } from 'src/app/services/products.service.service';

export interface ProductsCart {
  id: number,
  image: string;
  name: string;
  quantity: any;
  price: any;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  message: any;
  items: any;
  total: number;

  PRODUCT_DATA: ProductsCart[] = [];

  cartSource = new MatTableDataSource<ProductsCart>();
  displayedColumns = ["id", "image", "name", "quantity", "price", "action"];

  cartnumber: number = +localStorage.getItem("cartNumber");

  constructor(private ordersService: OrdersService,private productsService: Products , private _snackBar: MatSnackBar) { }


  ngOnInit(): void {

    this.makeArray();

    this.cartSource.data = this.PRODUCT_DATA;

    this.items = this.getItems();

    this.total =  this.totalPrice();
  }

  onSubmit(form: NgForm){
    if (localStorage.getItem("logedin") == "true"){
     
      this.insertOrder(form.value.payment)

      var username = localStorage.getItem("username")
      var logedIn = localStorage.getItem("logedin")

      localStorage.clear();

      localStorage.setItem("username", username)
      localStorage.setItem("logedin", logedIn)
      localStorage.setItem("cartNumber", "0")

      // for(let i=0; i < localStorage.length; i++){
      //   if(localStorage.key(i).includes("product")){
      //     console.log("product" + parseInt(localStorage.key(i).substring(7)));
      //     localStorage.removeItem("product" + parseInt(localStorage.key(i).substring(7)));
      //   }
      // }
      // localStorage.setItem("cartNumber", "0")
    }
  }

  deleteFromCart(id: number){

    if (localStorage.getItem("logedin") == "true"){
     
      this.cartnumber = this.cartnumber - 1; 
      localStorage.setItem("cartNumber", ""+this.cartnumber); 
      
      let stringQuantity = JSON.parse(localStorage.getItem("product" + id)).quantity
      let numberQunatity: number = +stringQuantity; 
      let stringId = JSON.parse(localStorage.getItem("product" + id)).id;

      this.cartDeleteQuantity(stringId, numberQunatity);

      localStorage.removeItem("product" + id);

      this.makeArray();

      this.cartSource.data = this.PRODUCT_DATA;

      this.total =  this.totalPrice();
    }
  }

  public insertOrder(form){
    var model: Orders = {
      "username": localStorage.getItem("username"),
      "payment": form,
      "price": this.total,
      "items": this.items,
      "orderedAt": new Date(),
      "status": "pending"
    }
    this.ordersService.insert(model).subscribe(value => { this._snackBar.open("Checkout complete, please go to orders to finish your purchase.","",{duration: 5000}); });
  }

  public cartDeleteQuantity(id, quantity){
    var model: QuanDeleteCart = {
      "id": id,
      "quantity": quantity,
      "isActive": "yes"
    }
    this.productsService.cartDeleteQuantity(model).subscribe(value => { this._snackBar.open("Successfuly deleted from cart","",{duration: 3000}); });
  }

  totalPrice(){
    var totalPrice = 0;
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        totalPrice += JSON.parse(localStorage.getItem(localStorage.key(i))).price * JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
      }
    }
    return Math.round(totalPrice * 100) / 100;
  }

  getItems(){
    var items = [];
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        items.push({id: JSON.parse(localStorage.getItem(localStorage.key(i))).id, 
                    image: JSON.parse(localStorage.getItem(localStorage.key(i))).image, 
                    name: JSON.parse(localStorage.getItem(localStorage.key(i))).name, 
                    price: JSON.parse(localStorage.getItem(localStorage.key(i))).price,
                    quantity: JSON.parse(localStorage.getItem(localStorage.key(i))).quantity})
      }
    }
    return items;
  }

  makeArray(){
    this.PRODUCT_DATA.length = 0;
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        this.PRODUCT_DATA.push({id: parseInt(localStorage.key(i).substring(7)), 
                                image: JSON.parse(localStorage.getItem(localStorage.key(i))).image, 
                                name: JSON.parse(localStorage.getItem(localStorage.key(i))).name, 
                                price: JSON.parse(localStorage.getItem(localStorage.key(i))).price,
                                quantity: JSON.parse(localStorage.getItem(localStorage.key(i))).quantity})
                                
      }
    }

  }

}
