import { Component, OnInit } from '@angular/core';
import { OrdersService, OrdersStatus } from 'src/app/services/orders.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products, QuanDeleteCart } from 'src/app/services/products.service.service';

export interface ItemsOrder {
  image: string;
  name: string;
  price: any;
  quantity: any;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  orderSource: any = new MatTableDataSource<ItemsOrder>();
  displayedColumns = ["image", "name", "quantity", "price"];

  constructor(private ordersService: OrdersService, private productsService: Products, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.orderSource.data = value; });
  }

  public findAllByUsername(username: string){
    return this.ordersService.findAllByUsername(username)
  }

  completeOrder(id: any){

    this.changeStatusComplete(id).subscribe(value => { this._snackBar.open("Order completed, go to your profile to see and rate this order.","",{duration: 5000}); });

  }

  cancelOrder(id: any, items:any){

    this.changeStatusCanceled(id).subscribe(value => { this._snackBar.open("Order canceld!","",{duration: 3000}); });

    console.log(items)

    items.forEach(item => {
      console.log(item.id)
      console.log(item.quantity)
      this.cartDeleteQuantity(item.id, item.quantity).subscribe(value => {});
    }); 
  }

  public changeStatusComplete(id){
    var model: OrdersStatus = {
      "id": id,
      "status": "completed"
    }
     return this.ordersService.changeStatus(model);
  }

  public changeStatusCanceled(id){
    var model: OrdersStatus = {
      "id": id,
      "status": "canceled"
    }
     return this.ordersService.changeStatus(model);
  }

  public cartDeleteQuantity(id, quantity){
    var model: QuanDeleteCart = {
      "id": id,
      "quantity": quantity,
      "isActive": "yes"
    }
    return this.productsService.cartDeleteQuantity(model);
  }

}
