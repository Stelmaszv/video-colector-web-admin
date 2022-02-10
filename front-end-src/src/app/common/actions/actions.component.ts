import { Component, OnInit ,Input} from '@angular/core';
import { HttpService } from 'src/app/Service/http/http.service';
import { TokkenService } from 'src/app/Service/tokken/tokken.service';
import { FormControl ,FormGroup} from '@angular/forms';
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
  public if_favorite=false
  constructor(private httpService: HttpService,private TokkenService: TokkenService) { }

  public add_to_if_favorite(){
    this.if_favorite=!this.if_favorite
    this.add_action(this.add_to_favorite_url)
  }

  public addrate = new FormGroup({
    rate: new FormControl(1)
  });

  public ngOnInit(){
    this.update_view()
  }

  public add_like(){
    this.add_action(this.add_like_url,'.like_js')
  }

  public add_to_rating(){
    this.add_action(this.add_to_rating_url,'.ratting_js')
  }

  public add_dislike(){
    this.add_action(this.add_to_dislike_url,'.dislike_js')
  }

  private update_view(){
    this.add_action(this.update_views_url,'.views_js')
  }

  private update_elemnt(selector:string){
    function to_int(value:any):any{
      return value*1
    }
    let domEl: HTMLElement | null = document.querySelector(selector);
    domEl && (domEl.innerHTML =to_int(domEl.innerHTML)+1);
  }

  private add_action(url:string,selector:string=''){
    if(this.TokkenService.if_isset_tokken()){
      this.httpService.get_url_auth(url).subscribe(
        (response) => {
          console.log(response)
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
