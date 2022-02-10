import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpService } from '../../../Service/http/http.service';
import {RatingService} from '../../../Service/ratting/rating.service'

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
  public if_liked=false
  public if_disliked=false
  public if_rating=false

  constructor(private activatedRoute: ActivatedRoute,protected httpService: HttpService,public RatingService:RatingService) { }

  public ngOnInit(): void 
  {
    this.set_id()
    this.get_url(this.id)
  }

  public add_like():void
  {
    this.if_liked=!this.if_liked
    this.add_action('dqwdqwdqwdqwdqwdqwdqwd')
  }

  public add_to_rating():void
  {
    this.if_rating=!this.if_rating
    this.add_action('dqwdqwdqwdqwdqwdqwdqwd')
  }

  public add_dislike():void
  {
    this.if_disliked=!this.if_disliked
    this.add_action('dqwdqwdqwdqwdqwdqwdqwd')
  }

  public add_to_if_favorite():void
  {
    this.if_favorite=!this.if_favorite
    this.add_action('dqwdqwdqwdqwdqwdqwdqwd')
  }

  private add_action(url:string){
    console.log(url)
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
          console.log(this.data)
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
