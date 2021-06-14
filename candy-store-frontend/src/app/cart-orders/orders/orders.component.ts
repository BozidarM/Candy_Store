import { Component, OnInit } from '@angular/core';
import { OrdersService, OrdersStatus } from 'src/app/services/orders.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products } from 'src/app/services/products.service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateOrderComponent } from '../update-order/update-order.component';

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

  dialogOpen: boolean = false;

  orderSource: any = new MatTableDataSource<ItemsOrder>();
  displayedColumns = ["image", "name", "quantity", "price"];

  constructor(private ordersService: OrdersService, private productsService: Products, private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.orderSource.data = value; });
  }

  public findAllByUsername(username: string){
    return this.ordersService.findAllByUsername(username)
  }

  completeOrder(id: any){

    this.changeStatusComplete(id).subscribe(value => { this._snackBar.open("Order completed, go to your profile to see and rate this order.","",{duration: 5000});
                                                       this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.orderSource.data = value; }); });

  }

  cancelOrder(id: any, items:any){

    this.changeStatusCanceled(id).subscribe(value => { this._snackBar.open("Order canceld!","",{duration: 3000}); 
                                                       this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.orderSource.data = value; });});

    var itemArray = [];
    items.forEach(item => {
      itemArray.push({id: item.id, quantity: item.quantity})
      //this.cartDeleteQuantity(item.id, item.quantity);
    }); 

    this.cancelOrderBackQuantity(itemArray);
  }

  updateOrder(id: any, city: string, address: string, payment: string){
    this.dialogOpen = true;

        const orderDialog = this.dialog.open(UpdateOrderComponent, {
          disableClose: true,
          width: "60vw",
          data: { orderId: id, city:city, address:address, payment: payment }
        });

        orderDialog.afterClosed().subscribe(result => {
          this.dialogOpen = false;
          this.findAllByUsername(localStorage.getItem("username")).subscribe(value => { this.orderSource.data = value; });
        })
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

  public cancelOrderBackQuantity(items: any){
    this.productsService.cancelOrderBackQuantity(items).subscribe(value => {});
  }

}
