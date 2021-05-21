import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  baseURL = "http://localhost:8091/product"
  getProductsByClientId(clientId : string) : Observable<any>{
    return this.http.get(this.baseURL+'/clientId/'+`${clientId}`);
  }

  findByModelNumber(modelNumber : string) : Observable<any>{
    return this.http.get(this.baseURL+"/modelNumber/"+`${modelNumber}`);
  }

  addProduct(product : any) :Observable<any>{
    return this.http.post("http://localhost:8091/product/addProduct",product);
  }
}
