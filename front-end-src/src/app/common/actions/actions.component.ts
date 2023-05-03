import { Component, OnInit ,Input} from '@angular/core';
import { HttpService } from 'src/app/Service/http/http.service';
import { TokkenService } from 'src/app/Service/tokken/tokken.service';
import { FormControl ,FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/Service/alert/alert.service';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit{
  @Input() add_like_url:any
  @Input() add_to_dislike_url:any
  @Input() add_to_rating_url:any
  @Input() add_to_favorite_url:any
  @Input() update_views_url:any
  @Input() favorite_stan:any
  @Input() edit_link:any
  private id=0
  public if_favorite=false
  constructor(
    private httpService: HttpService,
    private TokkenService: TokkenService,
    private Router:Router,
    private ActivatedRoute: ActivatedRoute,
    private AlertService:AlertService) 
    {}
      
  
  public add_to_if_favorite(){
    this.add_action(this.add_to_favorite_url)
    this.if_favorite=!this.if_favorite
    var stan = (this.if_favorite) ? 'added to' :'removed form';
    this.AlertService.alert('Object '+stan+' favorite')
  }

  public addrate = new FormGroup({
    rate: new FormControl(1)
  });

  public ngOnInit(){
    this.update_view()
    this.get_favorite()
  }

  public add_like(){
    this.AlertService.alert('Like Added')
    this.add_action(this.add_like_url,'.like_js')
  }

  public add_to_rating(){
    this.AlertService.alert('Rate Added')
    this.add_action(this.add_to_rating_url+'?rate='+this.addrate.value.rate,'.ratting_js')
  }

  public add_dislike(){
    this.AlertService.alert('Dislike Added')
    this.add_action(this.add_to_dislike_url,'.dislike_js')
  }

  private set_favorite(response:any){
    this.if_favorite=response.is_favorite
  }

  public edit(){
    this.set_id()
    this.Router.navigate([this.edit_link])
  }

  private set_id(): void  
  {
    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  private get_favorite(){
    if(this.TokkenService.if_isset_tokken()){
      this.httpService.get_url_auth(this.favorite_stan).subscribe(
        (response) => {
          this.set_favorite(response)
        },
        (error) => {
          if (error.statusText == 'Unauthorized'){
            localStorage.removeItem('tokkenAccess');
            localStorage.removeItem('tokkenRefresh');
            window.location.reload();
          }
        }
      );
    }
  }

  private update_view(){
    this.add_action(this.update_views_url,'.views_js')
  }

  private update_elemnt(selector:string){
    function to_int(value:any):any{
      return value*1
    }
    let domEl: HTMLElement | null = document.querySelector(selector);
    console.log(domEl && (domEl.innerHTML = to_int(domEl.innerHTML)+1))
    domEl && (domEl.innerHTML =to_int(domEl.innerHTML)+1);
  }

  private add_action(url:string,selector:string=''){
    if(this.TokkenService.if_isset_tokken()){
      this.httpService.get_url_auth(url).subscribe(
        (response) => {
          if (selector){
            this.update_elemnt(selector)
          }
        },
        (error) => {
          if (error.statusText == 'Unauthorized'){
            localStorage.removeItem('tokkenAccess');
            localStorage.removeItem('tokkenRefresh');
            window.location.reload();
          }
        }
      );
    }
  }

}
