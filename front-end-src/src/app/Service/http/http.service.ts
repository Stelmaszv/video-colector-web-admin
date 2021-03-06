import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TokkenService } from '../tokken/tokken.service';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  tokken:any
  server:string=''
  constructor(public http:HttpClient) {
      this.server='http://127.0.0.1:8000/'
   }

  
  public get_url(url :string) {
    return this.http.get(this.server+url);
  }

  private update_tokken(tokken:any){
    localStorage.setItem('tokkenAccess',tokken.access)
  }

  public delete(url:string){
    let use_local=false
    if (this.tokenExpired(localStorage['tokkenAccess'])){
      this.post_url('http://127.0.0.1:8000/api/token/refresh/',{'refresh':localStorage['tokkenRefresh']}).subscribe(
        respanse=> {
          this.update_tokken(respanse)
          this.tokken=respanse
          use_local=true
        }
      )
      use_local=true
    }
    let headers:HttpHeaders;
    if (use_local){
      headers = new HttpHeaders({'Authorization' : 'Bearer '+this.tokken.access});
    }else{
      headers = new HttpHeaders({'Authorization' : 'Bearer '+localStorage['tokkenAccess']});
    }
    return this.http.delete(this.server+url,{
      headers
    });
  }


  public get_url_auth(url :string) {
      let use_local=false
      if (this.tokenExpired(localStorage['tokkenAccess'])){
        this.post_url('http://127.0.0.1:8000/api/token/refresh/',{'refresh':localStorage['tokkenRefresh']}).subscribe(
          respanse=> {
            this.update_tokken(respanse)
            this.tokken=respanse
            use_local=true
          }
        )
        use_local=true
      }
      let headers:HttpHeaders;
      if (use_local){
        headers = new HttpHeaders({'Authorization' : 'Bearer '+this.tokken.access});
      }else{
        headers = new HttpHeaders({'Authorization' : 'Bearer '+localStorage['tokkenAccess']});
      }
      return this.http.get(this.server+url,{
        headers
      });
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  public post_url(url :string,data:any) {
    return this.http.post(url,data);
  }

  public put_url(url :string,data:any) {
    let use_local=false
    if (this.tokenExpired(localStorage['tokkenAccess'])){
      this.post_url('http://127.0.0.1:8000/api/token/refresh/',{'refresh':localStorage['tokkenRefresh']}).subscribe(
        respanse=> {
          this.update_tokken(respanse)
          this.tokken=respanse
          use_local=true
        }
      )
      use_local=true
    }
    let headers:HttpHeaders;
    if (use_local){
      headers = new HttpHeaders({'Authorization' : 'Bearer '+this.tokken.access});
    }else{
      headers = new HttpHeaders({'Authorization' : 'Bearer '+localStorage['tokkenAccess']});
    }
    return this.http.put(this.server+url,data,{headers});
  }
}

