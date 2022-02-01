import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movieid',
  templateUrl: './movieid.component.html',
  styleUrls: ['./movieid.component.scss']
})
export class MovieidComponent implements OnInit{

  protected id:any;
  protected url='http://127.0.0.1:8000/movie/';
  public data:any
  public mode='poster'
  public if_favorite=false
  public if_liked=false
  public if_disliked=false
  public good_procent:any
  public bad_procent:any

  constructor(private activatedRoute: ActivatedRoute,protected httpService: HttpService) { }

  public ngOnInit(): void 
  {
    this.set_id()
    this.get_url(this.id)
  }

  public add_like():void
  {
    this.if_liked=!this.if_liked
  }

  public add_dislike():void
  {
    this.if_disliked=!this.if_disliked
  }

  public add_to_if_favorite():void
  {
    this.if_favorite=!this.if_favorite
  }

  private bad_procent_def(movie:any){
    let all_liks=movie.likes_count+movie.disLikes_count
    return String(movie.disLikes_count*100/all_liks)+'%'
  }

  private good_procent_def(movie:any){
    let all_liks=movie.likes_count+movie.disLikes_count
    return String(movie.likes_count*100/all_liks)+'%'
  }

  private set_procent(data:any):void
  {
    this.good_procent = this.good_procent_def(data)
    this.bad_procent  = this.bad_procent_def(data)
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
          this.set_procent(response)
      }
    );
  }

  public if_good_rating(movie:any){
    let rate = parseInt(movie.avg_rating)
    if (0 < parseInt(movie.avg_rating)){
      if (rate > 3){
        return true
      }
      return false
    }else{
      return false
    }
  }

  public if_mid_rating(movie:any){
    let rate = parseInt(movie.avg_rating)
    if (0 < parseInt(movie.avg_rating)){
      if (rate == 3){
        return true
      }
      return false
    }else{
      return false
    }
  }

  public if_low_rating(movie:any){
    let rate = parseInt(movie.avg_rating)
    if (0 < parseInt(movie.avg_rating)){
      if (rate > 3){
        return true
      }
      return false
    }else{
      return false
    }
  }

}
