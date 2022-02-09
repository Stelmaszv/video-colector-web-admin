import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { TokkenService } from 'src/app/Service/tokken/tokken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Tokken:TokkenService){}
  canActivate():boolean {
    return  !!this.Tokken.if_isset_tokken()
  }
}
