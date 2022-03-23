import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alert(mess:string){
    let domEl: HTMLElement | null = document.querySelector('.alert-success');
    let alert_content_js: HTMLElement | null = document.querySelector('.alert_content_js');
  
    alert_content_js!.innerHTML=mess
    domEl!.classList.add('show')
    setTimeout(function(){
      domEl!.classList.remove('show')
    }, 3000);
  }

}
