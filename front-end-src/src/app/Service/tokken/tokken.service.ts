import { Injectable } from '@angular/core';
import {HttpService}   from '../http/http.service'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class TokkenService {

  private url='http://127.0.0.1:8000/api/token/'
  constructor(private http:HttpService,private Router:Router) { }

  public get_tokken(user:any){
    this.http.post_url(this.url,user).subscribe(tokken => {
      this.save_tokken(tokken)
    });
  }

  save_tokken(tokken:any){
    localStorage.setItem('tokkenAccess',tokken.access)
    localStorage.setItem('tokkenRefresh',tokken.refresh)
  }

  if_isset_tokken(){
    return localStorage['tokkenAccess']
  }

  
}
