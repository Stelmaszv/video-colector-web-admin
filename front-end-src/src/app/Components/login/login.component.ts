import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { TokkenService } from 'src/app/Service/tokken/tokken.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public TokkenService:TokkenService,private Router:Router) { }

  public login = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  public start_login(){
    this.TokkenService.get_tokken({
      "username" :this.login.value.login,
      "password" :this.login.value.password
    })
  }

  ngOnInit(): void {
    if (this.TokkenService.if_isset_tokken()){
      this.Router.navigate(['/movies'])
    }
  }

}
