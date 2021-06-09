import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Candies {
  id?: string;
  name: string;
  category: string;
  price: any;
  description: string;
  image: string;
  stars: any;
  rating: number;
  dateCreated: any;
  isActive: string;
  madeIn: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class Products{
  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/candies/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/candies/search/" + search);
  }

  public findInstrumentById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/candies/candy/" + id);
  }

  showCandy(id: String): any {
    this.router.navigate(['candies/candy/' + id]);
  }
}
