import { Component} from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'
import { FormControl ,FormGroup} from '@angular/forms';

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
  protected override fovorits_url:string='favorite/movie/'
  private next_movie_url ='http://127.0.0.1:8000/movienextinseries/'
  private next_movie_with_star_url ='http://127.0.0.1:8000/moviemextwithstar/'
  private stars_under_movie=5
  private min_count=3
  private movie_count_player=3
  private movie_count_player_limit=2
  public favorite=true
  
  public star_palyer = new FormGroup({
    star: new FormControl(1),
  });
  

  public next_movie_in_series(){
    this.httpService.get_url(this.next_movie_url+''+this.data.id+'').subscribe(
      (response) => {
        this.set_mext(response)
      }
    );
  }

  public next_movie_with_star(id=0){
    if (!id){
      id=this.star_palyer.value.star
    }
    this.httpService.get_url(this.next_movie_with_star_url+''+this.data.id+'?star='+id).subscribe(
      (response) => {
        this.set_mext(response)
      }
    );

  }

  private set_mext(response:any){
    window.location.href='/movie/'+response.id;
  }

  private data_stars(){
    let stars=[]
    for (let star of this.data['stars']){
      if (star.movies_count>this.min_count && stars.length<this.stars_under_movie){
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
      if (count<this.movie_count_player_limit){
        if (star.movies_count>this.movie_count_player){
          stars.push(star)
          count++
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
