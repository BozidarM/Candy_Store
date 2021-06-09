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

  currentRate = 5;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.findCandiesById(this.id);
  }

  onSubmit(form: NgForm){
    
  }

  public findCandiesById(id: string): any {
    return this.candiesService.findInstrumentById(id).subscribe(value => { this.data = value; });
  }

  addToCart(data: any){

  }

}
