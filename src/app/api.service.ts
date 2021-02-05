import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.baseUrl;
  userDetails: any;
  uuid: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': "application/json",
      "Content-Type": "application/json"
    })
  };

  constructor(private httpClient: HttpClient) { }

  public register(attributes){
    return this.httpClient.post(this.apiUrl+'/auth/register',attributes,this.httpOptions);
  }

  public login(attributes){
    return this.httpClient.post(this.apiUrl+'/auth/login',attributes,this.httpOptions);
  }

  public verify(attributes){
    console.log(attributes)
    return this.httpClient.post(this.apiUrl+'/auth/verify-email',attributes,this.httpOptions);
  }

  public dashboard(attributes){
    console.log(attributes)
    return this.httpClient.get(this.apiUrl+'/users/profile',this.httpOptions);
  }
  
}
