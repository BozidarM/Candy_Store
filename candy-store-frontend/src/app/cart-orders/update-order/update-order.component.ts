import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { OrdersService, UpdateOrder } from 'src/app/services/orders.service';


@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  cityForForm: string;
  addressForForm: string;
  paymentForForm: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private orderService: OrdersService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cityForForm = this.data.city;
    this.addressForForm = this.data.address;
    this.paymentForForm = this.data.payment;
  }

  onSubmit(form: NgForm){
    this.updateOrder(this.data.orderId, form.value.city, form.value.address, form.value.payment);
  }

  private updateOrder(id: string, city: string, address:string, payment:string){
    var model: UpdateOrder = {
      "id": id,
      "city": city,
      "address": address,
      "payment": payment
    }
    this.orderService.update(model).subscribe(value => { this._snackBar.open("Order is successfuly updated!","",{duration: 3000}); });
  }

}
