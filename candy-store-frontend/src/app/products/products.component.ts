import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Products } from '../services/products.service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: Products ) { }

  data: any;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): any {
    this.productService.findAll().subscribe(value => { this.data = value; });
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
