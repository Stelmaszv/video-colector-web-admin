import { Injectable } from '@angular/core';
import { TokkenService } from '../tokken/tokken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Tokken:TokkenService) { }
}
