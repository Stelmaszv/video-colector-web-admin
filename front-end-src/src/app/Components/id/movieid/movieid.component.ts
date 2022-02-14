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
  private player_count_limit=2
  
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

  private data_stars_player(){
    let stars=[]
    let count=0
    for (let star of this.data['stars']){
      if (star.movies_count>this.min_count_player){
        count++
        if (this.player_count_limit<count){
          stars.push(star)
        }
      }
    }
    return stars
  }

  private if_more_stars_player(stars:any):boolean{
    const more_stars_lenght=this.data['stars'].length-stars.length
    if (more_stars_lenght>0){
      return true
    }
    return false
  }

  protected override on_get_url(){
    this.data['movie_stars']=this.data_stars().sort(this.get_sort_order("movies_count")).reverse()
    this.data['movie_stars_player']=this.data_stars_player().sort(this.get_sort_order("movies_count")).reverse()
    this.data['more_player_stars']=this.if_more_stars_player(this.data['movie_stars_player'])
  }

}
