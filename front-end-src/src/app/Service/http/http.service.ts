import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TokkenService } from '../tokken/tokken.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(public http:HttpClient) { }
  
  public get_url(url :string) {
    return this.http.get(url);
  }

  update_tokken(tokken:any){
    localStorage.setItem('tokkenAccess',tokken.access)
  }

  public get_url_auth(url :string) {
      if (this.tokenExpired(localStorage['tokkenAccess'])){
        this.post_url('http://127.0.0.1:8000/api/token/refresh/',{'refresh':localStorage['tokkenRefresh']}).subscribe(
          respanse=> {
            this.update_tokken(respanse)
          }
        )
      }
      let headers = new HttpHeaders({'Authorization' : 'Bearer '+localStorage['tokkenAccess']});
      return this.http.get(url,{
        headers
      });
  }

  public tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  public post_url(url :string,data:any) {
    return this.http.post(url,data);
  }

  public put_url(url :string,data:any) {
    if (this.tokenExpired(localStorage['tokkenAccess'])){
      this.post_url('http://127.0.0.1:8000/api/token/refresh/',{'refresh':localStorage['tokkenRefresh']}).subscribe(
        respanse=> {
          this.update_tokken(respanse)
        }
      )
    }
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+localStorage['tokkenAccess']});
    return this.http.put(url,data,{headers});
  }
}

