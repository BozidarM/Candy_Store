import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Products } from '../services/products.service.service';
import { sortBy } from 'sort-by-typescript';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: Products, private router: Router ) { }

  data: any;
  copyData: any;
  p: number = 1;
  value: any;
  cartNumber: string;  
  rating: any;
  categories: any;
  username: string;

  ngOnInit(): void {
    this.cartNumber =localStorage.getItem("cartNumber");
    this.username = localStorage.getItem("username");
    this.findAll();
  }

  onSortChange(sortType: any){

    //SORT
    if (sortType.value == ""){
      this.findAll();
    }
    if (sortType.value == "name-asc"){
      
      this.data = this.data.sort(sortBy("name"));
    }
    if (sortType.value == "name-dsc"){

      this.data = this.data.sort(sortBy("-name"));
    }
    if (sortType.value == "price-asc"){

      this.data = this.data.sort(sortBy("price"));
    }
    if (sortType.value == "price-dsc"){

      this.data = this.data.sort(sortBy("-price"));
    }
    if (sortType.value == "date-asc"){

      this.data = this.data.sort(sortBy("dateCreated"));
    }
    if (sortType.value == "date-dsc"){

      this.data = this.data.sort(sortBy("-dateCreated")); 
    }
    
  }

  onPriceChange(value: any){

    if (value.value > 0){

      this.data = this.copyData.filter(function(product){
        return product.price <= value.value;
      })

    }else if(value.value == 0){
      this.findAll();
    }
  }

  onCategoryChange(category: any){

    if( category.value == "chocolate"){
      this.data = this.copyData.filter(function(product){
        return product.category === 'Chocolate'
      })
    }
    if( category.value == "jelly"){
      this.data = this.copyData.filter(function(product){
        return product.category === 'Jelly'
      })
    }
    if( category.value == "gummy"){
      this.data = this.copyData.filter(function(product){
        return product.category === 'Gummy'
      })
    }
    if( category.value == "gum"){
      this.data = this.copyData.filter(function(product){
        return product.category === 'Gum'
      })
    }
    if( category.value == "marshmallow"){
      this.data = this.copyData.filter(function(product){
        return product.category === 'Marshmallow'
      })
    }
    if(category.value == "all"){
      this.findAll()
    }
  }

  onRatingChange(rating: any){
    if( rating.value == "1"){
      this.data = this.copyData.filter(function(product){
        return product.rating === 1;
      })
    }
    if( rating.value == "2"){
      this.data = this.copyData.filter(function(product){
        return product.rating === 2;
      })
    }
    if( rating.value == "3"){
      this.data = this.copyData.filter(function(product){
        return product.rating === 3;
      })
    }
    if( rating.value == "4"){
      this.data = this.copyData.filter(function(product){
        return product.rating === 4;
      })
    }
    if( rating.value == "5"){
      this.data = this.copyData.filter(function(product){
        return product.rating === 5;
      })
    }
    if( rating.value == "all"){
      this.findAll()
    }
  }

  public findAll(): any {
    this.productService.findAll().subscribe(value => { this.data = value; this.copyData = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }
    else{
      this.productService.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneCandy(id: String): any {
    this.productService.showCandy(id);
  }

}
