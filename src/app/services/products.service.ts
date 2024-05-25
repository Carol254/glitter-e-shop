import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productData } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost/glitterinfo';

  constructor(private http:HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAllProducts():Observable<productData[]>{
    return this.http.get<productData[]>(`${this.baseUrl}/list.php`);
  }

  getAllProductsById(id:any):Observable<productData>{
    return this.http.get<productData>(`${this.baseUrl}/list-by-id.php?id=${id}`);
  }

  getLadiesProducts():Observable<productData[]>{
    return this.http.get<productData[]>(`${this.baseUrl}/ladies.php`);
  }

  getLadiesWatches():Observable<productData[]>{
    return this.http.get<productData[]>(`${this.baseUrl}/ladies-watches.php`);
  }

  getLadiesNecklaces():Observable<productData[]>{
    return this.http.get<productData[]>(`${this.baseUrl}/ladies-necklaces.php`);
  }
  getLadiesRings():Observable<productData[]>{
    return this.http.get<productData[]>(`${this.baseUrl}/ladies-rings.php`);
  }

  getLadiesEarrings():Observable<productData[]>{
    return this.http.get<productData[]>(`${this.baseUrl}/list-earrings.php`);
  } 

  getLadiesBracelets():Observable<productData[]>{
    return this.http.get<productData[]>(`${this.baseUrl}/ladies-bracelets.php`);
  }  

  getMensProducts():Observable<productData[]>{
    return this.http.get<productData[]>(`${this.baseUrl}/men.php`);
  }

}
