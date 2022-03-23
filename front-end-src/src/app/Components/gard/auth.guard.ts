import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { TokkenService } from 'src/app/Service/tokken/tokken.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Tokken:TokkenService,private Router:Router){}
  canActivate():boolean {
    if(this.Tokken.if_isset_tokken()){
      return true;
    }else{
      this.Router.navigate(['/login'])
      return false;
    }
  }
}
