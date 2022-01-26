import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {BaseListComponent} from '../base-list/base-list.component'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent extends BaseListComponent {
  mode ='poster'

  protected override url='http://127.0.0.1:8000/movies'

  private set_more(movie:any){
    if (movie.stars.length>2){
      return movie.stars.length-2
    }
    return 0
  }

  private set_stars(movie:any){
    let better_stars=[]
    let resst=[]
    let count=0

    for (let star of movie.stars){
      if (star.views.length>0){
        better_stars.push(star)
      }
    }

    for (let star of movie.stars){
      if (star.views.length==0){
        resst.push(star)
        count++
      }
    }

    if (!better_stars.length){
      let reset1=resst[Math.floor(Math.random()* resst.length)]
      return better_stars.concat(reset1);
    }
    return better_stars;
  }

  protected override on_set_results(movie:any):any
  {
    movie['js_stars']=this.set_stars(movie)
    movie['more']=this.set_more(movie)
  }
}
