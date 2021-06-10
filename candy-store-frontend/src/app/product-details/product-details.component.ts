import { Component, OnInit } from '@angular/core';
import { Products } from '../services/products.service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private candiesService: Products, private route:ActivatedRoute) { }

  id: string = "";
  data: any;
  comments: any;
  currentRate: number;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.findCandiesById(this.id);
    this.findAllCommentsByCandiesId(this.id);
  }

  onSubmit(form: NgForm){
    
  }

  public findCandiesById(id: string): any {
    return this.candiesService.findCandyById(id).subscribe(value => { this.data = value; this.currentRate = this.data.rating});
  }

  public findAllCommentsByCandiesId(id: string): any {
    return this.candiesService.findAllByCandiesId(id).subscribe(value => { this.comments = value; } );
  }

  addToCart(data: any){

  }

}
