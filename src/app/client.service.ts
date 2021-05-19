import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  baseURL = 'http://localhost:8091/client'

  signIn(clientId:string,password:string):Observable<any>{
    let params=new HttpParams()
      .set('clientId',clientId)
      .set('password',password);
    return  this.http.get(this.baseURL+'/clientSignIn',{params});
  }
}
