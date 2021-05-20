import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }
  baseURL = 'http://localhost:8091/admin';
  getComplaintsByRequestStatus() : Observable<any>{
    return this.http.get(this.baseURL + '/requestedForReplacement');
  }

  replaceEngineerFromComplaint(complaintId : any)  : Observable<any>{
      return this.http.put(this.baseURL+'/replace/engineer/complaintId/'+`${complaintId}`,complaintId);
  }
}
