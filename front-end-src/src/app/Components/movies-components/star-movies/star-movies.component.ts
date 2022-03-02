
import { Component, Input, OnInit } from '@angular/core';
import {MoviesComponent} from '../movies/movies.component'

@Component({
  selector: 'app-star-movies',
  templateUrl: '../movies/movies.component.html',
  styleUrls: ['../movies/movies.component.scss']
})
export class StarMoviesComponent extends MoviesComponent {
  @Input() ID:any=0
  start=true

  public override on_set_url():void
  {
    if (this.start){
      this.url='http://127.0.0.1:8000/starsmovie/'+this.ID
    }
  }
}