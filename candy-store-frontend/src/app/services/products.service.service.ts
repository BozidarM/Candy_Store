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

export interface QuanDeleteCart {
  id: string;
  quantity: number;
  isActive: string;
}

export interface UpdatingStars {
  id: string;
  rating: number;
}

export interface Comment {
  candiesId: string;
  username: string;
  content: string;
  postedAt: Date;
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

  public findCandyById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/candies/candy/" + id);
  }

  public findAllByCandiesId(id: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/comments/all-comments/" + id);
  }

  public insertComment(model: Comment) :  Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/comments/insert", model)
  }

  public updateQuantity(model: Candies) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/candies/update-quantity", model);
  }

  public cartDeleteQuantity(model: QuanDeleteCart) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/candies/cart-delete-quantity", model);
  }

  public updateStars(model: UpdatingStars) :  Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/candies/update-stars", model);
  }

  public cancelOrderBackQuantity(items: any) :  Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/candies/cancel-order-quantity", items);
  }

  showCandy(id: String): any {
    this.router.navigate(['candies/candy/' + id]);
  }
}
