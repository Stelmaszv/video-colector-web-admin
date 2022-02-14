import { Component} from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'

@Component({
  selector: 'app-movieid',
  templateUrl: './movieid.component.html',
  styleUrls: ['./movieid.component.scss']
})
export class MovieidComponent extends BaseIDComponent{

  public mode='poster'
  protected override url='http://127.0.0.1:8000/movie/'
  protected override add_to_like_url:string='movieaddtolike/'
  protected override add_to_rating_url:string='movieaddtorating/'
  protected override add_to_dislike_url:string='movieaddtodislike/'
  protected override update_views_url:string='movieaupdateviews/'
  protected override fovorits_url:string='movieaddfovorit/'
  private stars_under_movie=5
  private min_count=3
  private min_count_player=3
  
  private data_stars(){
    let stars=[]
    for (let star of this.data['stars']){
      if ((star.likes_count || star.views_count || star.movies_count)>this.min_count && stars.length<this.stars_under_movie){
        stars.push(star)
      }
    }
    return stars
  }
  private get_sort_order(prop:any) {    
    return function(a:any, b:any) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}
  protected data_stars_player(){
    let stars=[]
    for (let star of this.data['stars']){
      if (star.movies_count>this.min_count_player){
        stars.push(star)
      }
    }
    return stars
  }

  protected override on_get_url(){
    this.data['movie_stars']=this.data_stars().sort(this.get_sort_order("movies_count")).reverse()
    this.data['movie_stars_player']=this.data_stars_player().sort(this.get_sort_order("movies_count")).reverse()
  }

}
