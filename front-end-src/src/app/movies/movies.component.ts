import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { StarsComponent } from '../stars/stars.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  mode ='cover'
  movies : any;

  constructor(private httpService: HttpService) { }

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

  private set_results():void{
    this.movies=this.movies.results
    
    for (let movie of this.movies){
      movie['js_stars']=this.set_stars(movie)
      movie['more']=this.set_more(movie)
    }
  }

  public ngOnInit(): void {
    this.httpService.get_url('http://127.0.0.1:8000/movies')
    
    
    .subscribe(
      (response) => {
        if (response.hasOwnProperty('results')){
          this.movies=response
          this.set_results()
        }
      }
    );
  }

}
