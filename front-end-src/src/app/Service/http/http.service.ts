import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http:HttpClient) { }
  
  public get_url(url :string) {
    return this.http.get(url);
  }
  public get_url_auth(url :string) {
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+localStorage['tokkenAccess']});
    return this.http.get(url,{
      headers
    });
  }

  public post_url(url :string,data:any) {
    return this.http.post(url,data);
  }

  public put_url(url :string,data:any) {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url,data,{headers});
  }
}

