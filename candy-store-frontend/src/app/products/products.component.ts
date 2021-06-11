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
  pageOfItems: Array<any>;
  value: any;
  cartNumber: string;  

  ngOnInit(): void {
    this.cartNumber =localStorage.getItem("cartNumber");
    this.findAll();
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onSortChange(sortType: any){

    //SORT
    if (sortType.value == ""){
      this.findAll();
    }

    if (sortType.value == "name-asc"){
      
      this.data = this.data.sort(sortBy("name"));
      this.pageOfItems = this.data;

    }
    if (sortType.value == "name-dsc"){

      this.data = this.data.sort(sortBy("-name"));
      this.pageOfItems = this.data;

    }
    if (sortType.value == "price-asc"){

      this.data = this.data.sort(sortBy("price"));
      this.pageOfItems = this.data;
  
    }
    if (sortType.value == "price-dsc"){

      this.data = this.data.sort(sortBy("-price"));
      this.pageOfItems = this.data;

    }
    if (sortType.value == "date-asc"){

      this.data = this.data.sort(sortBy("dateCreated"));
      this.pageOfItems = this.data;
   
    }
    if (sortType.value == "date-dsc"){

      this.data = this.data.sort(sortBy("-dateCreated"));
      this.pageOfItems = this.data;
 
    }

    // PRICE RANGE
    if (this.value > 0){
      var array = this.data;
      var priceValue = this.value;
      var arrayCopy = this.copyData;

      //console.log(arrayCopy)
      
      arrayCopy.forEach(function (candy) {
         console.log(priceValue)
        
        if (candy.price <= priceValue){
            console.log(candy)
            console.log(array)
            array.push(candy);
         }
      }); 

      this.data = [];
      this.data = array;

    }else if(this.value == 0){
      this.findAll();
    }

    //CATEGORY
    console.log(sortType.value)

    //RATING
    
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
