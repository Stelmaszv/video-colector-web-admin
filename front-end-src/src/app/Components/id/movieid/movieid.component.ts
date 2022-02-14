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
  
  private data_stars(){
    let stars=[]
    for (let star of this.data['stars']){
      console.log(star)
      if ((star.likes_count || star.views_count || star.movies_count)>3){
        stars.push(star)
      }
    }
    return stars
  }

  protected override on_get_url(){
    this.data['movie_stars']=this.data_stars()
  }

}
