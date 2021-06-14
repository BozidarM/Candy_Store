import { Component, OnInit } from '@angular/core';
import { Candies, Products } from '../services/products.service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private candiesService: Products, private route:ActivatedRoute, private _snackBar: MatSnackBar, private router: Router) { }

  id: string = "";
  data: any;
  comments: any;
  currentRate: number;
  cartNumber: string;  
  username: string;

  ngOnInit(): void {
    this.cartNumber =localStorage.getItem("cartNumber");
    this.username  = localStorage.getItem("username");
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.findCandiesById(this.id);
    this.findAllCommentsByCandiesId(this.id);
  }

  onSubmit(form: NgForm){
    if (localStorage.getItem("logedin") == "true"){

      var quantityInDB = this.data.quantity

      this.data.quantity = quantityInDB - form.value.quantity;

      if (this.data.quantity < 0){

        this.data.quantity = quantityInDB;

        this._snackBar.open("No more in stock!","",{duration: 3000});

      }else{

        this.data.quantity = form.value.quantity;
        var cartnumber: number = +localStorage.getItem("cartNumber");
        var incrementCartNumber = cartnumber++;

        if (++incrementCartNumber == parseInt(localStorage.key(parseInt(localStorage.getItem("product" + incrementCartNumber))).substring(7))){
          
          localStorage.setItem("cartNumber", ""+incrementCartNumber);
          localStorage.setItem("product" + ++incrementCartNumber,  JSON.stringify(this.data));
        }else{
          localStorage.setItem("product" + incrementCartNumber,  JSON.stringify(this.data));
          localStorage.setItem("cartNumber", ""+incrementCartNumber);
        }

        this.data.quantity = quantityInDB - form.value.quantity;

        this.updateQunatity(this.data);

        this._snackBar.open("Successfuly added to cart!","",{duration: 3000});

        this.cartNumber =localStorage.getItem("cartNumber");

        this.findCandiesById(this.id);
      }
    }else{
      this.router.navigate(['/login'])
    }

  }

  public findCandiesById(id: string): any {
    return this.candiesService.findCandyById(id).subscribe(value => { this.data = value; this.currentRate = this.data.rating});
  }

  public findAllCommentsByCandiesId(id: string): any {
    return this.candiesService.findAllByCandiesId(id).subscribe(value => { this.comments = value; } );
  }

  public updateQunatity(model: Candies): any {
    return this.candiesService.updateQuantity(model).subscribe(value => { if (value == null) {  this._snackBar.open("Faild to add to cart!","",{duration: 3000}); } })
  }

  addToCart(data: any){

  }

}
