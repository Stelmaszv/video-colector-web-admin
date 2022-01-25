import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  mode ='cover'
  movies : any;

  constructor(private httpService: HttpService) { }

  private set_stars(movie:any):[]{
    console.log(movie.stars);
    return movie
  }

  private set_results():void{
    this.movies=this.movies.results
    
    for (let movie of this.movies){
      movie['js_stars']=this.set_stars(movie)
    }
    console.log(this.movies)
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
