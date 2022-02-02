import {MoviesComponent} from '../movies/movies/movies.component'
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-stars-movies',
  templateUrl: '../movies/movies.component.html',
  styleUrls: ['../movies/movies.component.scss']
})
export class MoviesWithStarsComponent extends MoviesComponent {
  @Input() ID:any=0
  start=true

  public override on_set_url():void
  {
    if (this.start){
      this.url='http://127.0.0.1:8000/movieswithstars/'+this.ID+'?page='
    }
  }
}


