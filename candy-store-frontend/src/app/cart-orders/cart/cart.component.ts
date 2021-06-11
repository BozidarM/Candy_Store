import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Orders, OrdersService } from '../../services/orders.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Products {
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

  PRODUCT_DATA: Products[] = [ {id: 1, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/HardCandy.jpg/1200px-HardCandy.jpg", name:"test", quantity:5, price: 50} ];

  cartSource = new MatTableDataSource<Products>();
  displayedColumns = ["id", "image", "name", "quantity", "price", "action"];

  cartnumber: number = +localStorage.getItem("cartNumber");

  constructor(private ordersService: OrdersService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {

    this.makeArray();

    this.cartSource.data = this.PRODUCT_DATA;

    this.items = this.getItems();

    this.total =  this.totalPrice();
  }

  onSubmit(form: NgForm){
    if (localStorage.getItem("logedin") == "true"){
      var model: Orders = {
        "username": localStorage.getItem("username"),
        "payment": form.value.payment,
        "price": this.total,
        "items": this.items,
        "orderedAt": new Date(),
        "status": "pending"
      }
      this.ordersService.insert(model).subscribe(value => { this._snackBar.open("Checkout complete, please go to orders to finish your purchase.","",{duration: 5000}); });
      for(let i=0; i < localStorage.length; i++){
        if(localStorage.key(i).includes("product")){
          console.log("product" + i);
          localStorage.removeItem("product" + parseInt(localStorage.key(i).substring(7)));
        }
      }
      localStorage.setItem("cartNumber", "0")
    }
  }

  deleteFromCart(id: number){

    if (localStorage.getItem("logedin") == "true"){
     
      this.cartnumber = this.cartnumber - 1; 
      localStorage.setItem("cartNumber", ""+this.cartnumber); 
      localStorage.removeItem("product" + id); 

      this.makeArray();

      this.cartSource.data = this.PRODUCT_DATA;

      this.total =  this.totalPrice();
    }
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
        items.push({id: i, 
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
