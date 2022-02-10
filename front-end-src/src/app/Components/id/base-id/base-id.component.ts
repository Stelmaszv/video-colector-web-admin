import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpService } from '../../../Service/http/http.service';
import {RatingService} from '../../../Service/ratting/rating.service'
import { Router } from '@angular/router';
import { TokkenService } from 'src/app/Service/tokken/tokken.service'; 
import { FormControl ,FormGroup} from '@angular/forms';

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


  public addrate = new FormGroup({
    rate: new FormControl(1)
  });

  constructor(private activatedRoute: ActivatedRoute,protected httpService: HttpService,public RatingService:RatingService,private Router:Router,public TokkenService:TokkenService) { }

  public ngOnInit(): void 
  {
    this.set_id()
    this.get_url(this.id)
  }

  public add_like():void
  {
    this.data.likes_count=this.data.likes_count+1
    this.set_procent(this.data)
    this.add_action(this.server+this.add_to_like_url+this.id+'/')
  }

  public add_to_rating():void
  {
    this.add_action(this.server+this.add_to_rating_url+this.id+'/?rate='+this.addrate.value.rate)
    window.location.reload();
  }

  public return_add_to_ratng_url(){
    return this.server+this.add_to_rating_url+this.id+'/?rate='+this.addrate.value.rate
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

  public add_dislike():void
  {
    this.data.disLikes_count=this.data.disLikes_count+1
    this.set_procent(this.data)
    this.add_action(this.server+this.add_to_dislike_url+this.id+'/')
  }

  private update_views(id:any):void
  {
    this.data.views_count=this.data.views_count+1
    this.add_action(this.server+this.update_views_url+this.id+'/')
  }

  public add_to_if_favorite():void
  {
    this.if_favorite=!this.if_favorite
    this.add_action(this.server+this.fovorits_url+this.id+'/')
  }

  private add_action(url:string){
    if(this.TokkenService.if_isset_tokken()){
      this.httpService.get_url_auth(url).subscribe(
        (response) => {
          console.log(response)
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
  
  private set_id(): void  
  {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  private get_url(id:number): void 
  {
    this.httpService.get_url(this.url+''+id+'').subscribe(
      (response) => {
          this.data=response
          this.update_views(id)
          this.set_procent(response)
      }
    );
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
