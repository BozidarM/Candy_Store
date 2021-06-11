import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Orders {
  username: string;
  payment: string;
  price: any;
  items: any;
  orderedAt: any;
  status: any;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  public findAllByUsername(username: String) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/orders/all/" + username);
  }

  public insert(model: Orders) : Observable<HttpResponse<any>>{
      return this.http.post<any>("http://localhost:8080/orders/insert", model);
  }

  public deleteById(id: String) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/orders/delete/" + id);
  }
}
