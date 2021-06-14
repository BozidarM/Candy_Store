import { Component, OnInit } from '@angular/core';
import { OrdersService, OrdersStatus } from 'src/app/services/orders.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products, QuanDeleteCart } from 'src/app/services/products.service.service';
import { MatDialog } from '@angular/material/dialog';
import { RateCommentComponent } from '../rate-comment/rate-comment.component';

export interface ItemsOrder {
  image: string;
  name: string;
  price: any;
  quantity: any;
}

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

  dialogOpen: boolean = false;

  orderSource: any = new MatTableDataSource<ItemsOrder>();

  displayedColumns = ["image", "name", "quantity", "price", "action"];

  constructor(private ordersService: OrdersService, private productsService: Products, private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.findAllOrdersHistoryByUsername(localStorage.getItem("username")).subscribe(value => { this.orderSource.data = value; });
  }

  public findAllOrdersHistoryByUsername(username: string){
    return this.ordersService.findAllOrdersHistoryByUsername(username)
  }

  public deleteById(id: string){
    return this.ordersService.deleteById(id);
  }
  
  deleteOrder(id: any){
    this.deleteById(id).subscribe(value => {  this._snackBar.open("Order deleted from history.","",{duration: 3000}); 
                                              this.findAllOrdersHistoryByUsername(localStorage.getItem("username")).subscribe(value => { this.orderSource.data = value; }); });
  }

  rateAndComment(elementId: any, username: string){
    this.dialogOpen = true;

        const rateDialog = this.dialog.open(RateCommentComponent, {
          disableClose: true,
          width: "60vw",
          data: { candyId: elementId, username:username }
        });

        rateDialog.afterClosed().subscribe(result => {
          this.dialogOpen = false;
        })
  }
}
