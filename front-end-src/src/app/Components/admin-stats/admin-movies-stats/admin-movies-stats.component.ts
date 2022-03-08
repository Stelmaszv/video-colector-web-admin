import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-admin-movies-stats',
  templateUrl: './admin-movies-stats.component.html',
  styleUrls: ['./admin-movies-stats.component.scss']
})
export class AdminMoviesStatsComponent extends BaseIDComponent {

  public override url = 'http://127.0.0.1:8000/movie/'
  public liks_url='http://127.0.0.1:8000/admin/stats/movie/laiks/' 
  public disliks_url='http://127.0.0.1:8000/admin/stats/movie/disliks/' 
  public views_url='http://127.0.0.1:8000/admin/stats/movie/views/'
  public ratings_url='http://127.0.0.1:8000/admin/stats/movie/ratings/'
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
