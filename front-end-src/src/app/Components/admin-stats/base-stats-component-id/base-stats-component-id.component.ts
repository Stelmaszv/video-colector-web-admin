import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-base-stats-component-id',
  templateUrl: './base-stats-component-id.component.html',
  styleUrls: ['./base-stats-component-id.component.scss']
})
export class BaseStatsComponentIDComponent extends BaseIDComponent {

  public override url = ''
  public liks_url='' 
  public disliks_url='' 
  public views_url=''
  public ratings_url=''
  public delete_like='http://127.0.0.1:8000/delete/like/'
  public delete_dislike='http://127.0.0.1:8000/delete/dislike/'
  public delete_ratings='http://127.0.0.1:8000/delete/rating/'
  public delete_views='http://127.0.0.1:8000/delete/views/'
  protected override  auth=true

  public return_like_url():string
  {
    return this.liks_url+this.id;
  }

  public return_dislike_url():string
  {
    return this.disliks_url+this.id;
  }

  public return_views_url():string
  {
    return this.views_url+this.id;
  }

  public return_ratings_url():string
  {
    return this.ratings_url+this.id;
  }

  public return_like_delete_url(){
    return this.delete_like;
  }

  public return_dislike_delete_url(){
    return this.delete_dislike;
  }

  public return_ratings_delete_url(){
    return this.delete_ratings;
  }

  public return_views_delete_url(){
    return this.delete_views;
  }

}
