import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpService } from '../../../Service/http/http.service';
import {RatingService} from '../../../Service/ratting/rating.service'
import { Router } from '@angular/router';
import { TokkenService } from 'src/app/Service/tokken/tokken.service'; 
import { FormBuilder, FormControl ,FormGroup} from '@angular/forms';
import { RelationSelectService } from 'src/app/Service/select/relation-select.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-base-id',
  templateUrl: './base-id.component.html',
  styleUrls: ['./base-id.component.scss']
})
export class BaseIDComponent implements OnInit {

  protected id:any;
  protected url='';
  public data:any
  public good_procent:any
  public bad_procent:any
  public if_favorite=false
  protected server:string='http://127.0.0.1:8000/'
  protected add_to_like_url:string=''
  protected add_to_rating_url:string=''
  protected add_to_dislike_url:string=''
  protected update_views_url:string=''
  protected fovorits_url:string=''
  protected chceck_favorit_stan_url:string=''
  protected auth:any=false
  protected edit_url_heder:string=''
  public button_section:string=''
  public banner:string=''

  public addrate = new FormGroup({
    rate: new FormControl(1)
  });

  constructor(protected fb: FormBuilder,
              private TitleService: Title,
              public RelationSelectService:RelationSelectService,
              private activatedRoute: ActivatedRoute,
              protected httpService: HttpService,
              public RatingService:RatingService,
              protected Router:Router,
              public TokkenService:TokkenService) { }

  public ngOnInit(): void 
  {
    this.set_id()
    this.get_url(this.id)
    this.on_init()

  }

  public random_banneer(data:any){
    return data.banners[Math.floor(Math.random()*data.banners.length)].url
  }

  protected on_init():void {}

  protected on_get_result(response:any):void {}

  public return_add_to_ratng_url(){
    return this.server+this.add_to_rating_url+this.id+'/'
  }

  public return_add_to_like_url(){
    return this.server+this.add_to_like_url+this.id+'/'
  }

  public return_add_to_dislike_url(){
    return this.server+this.add_to_dislike_url+this.id+'/'
  }
  
  public return_add_to_favorite_url(){
    return this.server+this.fovorits_url+this.id+'/'
  }
  public return_chceck_favorit_stan_url(){
    return this.server+this.chceck_favorit_stan_url+this.id+'/'
  }

  public return_update_views_url(){
    return this.server+this.update_views_url+this.id+'/'
  }

  public return_edit_url(){
    return this.edit_url_heder+this.id
  }

  protected on_get_url(){}
  
  private set_id(): void  
  {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  protected set_title(response:any):string{
    return response['name']
  }

  protected set_banner(data:any){
    this.banner=this.random_banneer(data)
    console.log(this.banner)
  }

  protected get_url(id:number): void 
  {
    if (this.auth==false){
      this.httpService.get_url(this.url+''+id+'').subscribe(
        (response) => {
            this.data=response
            this.on_get_url()
            this.set_procent(response)
            this.set_banner(response)
            this.on_get_result(response)
            this.TitleService.setTitle(this.set_title(response));
        }
      );
    }else{
      this.httpService.get_url_auth(this.url+''+id+'').subscribe(
        (response) => {
            console.log(response)
            this.data=response
            this.on_get_url()
            this.set_procent(response)
            this.on_get_result(response)
            this.set_banner(response)
            this.TitleService.setTitle(this.set_title(response));
        },
        (error) => {
          console.log(error.statusText)
          if (error.statusText == 'Unauthorized'){
            console.log('Unauthorized')
          }
        }
      );
    }
  }

  private set_procent(data:any):void
  {
    this.good_procent = this.good_procent_def(data)
    this.bad_procent  = this.bad_procent_def(data)
  }

  private bad_procent_def(movie:any){
    let all_liks=movie.likes_count+movie.disLikes_count
    return String(movie.disLikes_count*100/all_liks)+'%'
  }

  private good_procent_def(movie:any){
    let all_liks=movie.likes_count+movie.disLikes_count
    return String(movie.likes_count*100/all_liks)+'%'
  }
}
