import { Injectable } from '@angular/core';
import {HttpService}   from '../http/http.service'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class TokkenService {

  private url='http://127.0.0.1:8000/api/token/'
  constructor(private http:HttpService,private Router:Router) { }
  public tokken_error=false

  public get_tokken(user:any){
    this.http.post_url(this.url,user).subscribe(tokken => {
      this.save_tokken(tokken)
      this.tokken_error=false
      window.location.reload();
    },

    error=>{
      this.tokken_error=true
    });

  }

  public tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  update_tokken(tokken:any){
    localStorage.setItem('tokkenAccess',tokken)
  }

  save_tokken(tokken:any){
    localStorage.setItem('tokkenAccess',tokken.access)
    localStorage.setItem('tokkenRefresh',tokken.refresh)
    console.log(tokken.refresh)
  }

  if_isset_tokken(){
    return localStorage['tokkenAccess']
  }

  
}
