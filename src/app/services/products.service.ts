import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productData } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAllProducts():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/list.php');
  }

  getLadiesProducts():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/ladies.php');
  }

  getMensProducts():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/men.php');
  }

}
