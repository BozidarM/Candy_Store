import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

export interface products {
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
  total: number;

  PRODUCT_DATA: products[] = [ {id: 1, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/HardCandy.jpg/1200px-HardCandy.jpg", name:"test", quantity:5, price: 50} ];

  cartSource = new MatTableDataSource<products>();
  displayedColumns = ["id", "image", "name", "quantity", "price", "action"];

  constructor() { }

  ngOnInit(): void {

    this.cartSource.data = this.PRODUCT_DATA;
  }

  onSubmit(form: NgForm){
    
  }

  getTotalCost() {
    return this.PRODUCT_DATA.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

}
