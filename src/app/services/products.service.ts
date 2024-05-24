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

  getLadiesWatches():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/ladies-watches.php');
  }

  getLadiesNecklaces():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/ladies-necklaces.php');
  }
  getLadiesRings():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/ladies-rings.php');
  }

  getLadiesEarrings():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/ladies-earrings.php');
  } 

  getLadiesBracelets():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/ladies-bracelets.php');
  }  

  getMensProducts():Observable<productData[]>{
    return this.http.get<productData[]>('http://localhost/glitterinfo/men.php');
  }

}
