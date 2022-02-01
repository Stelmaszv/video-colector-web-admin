import {MoviesComponent} from '../movies/movies.component'
import { Component} from '@angular/core';

@Component({
  selector: 'app-stars-movies',
  templateUrl: '../movies/movies.component.html',
  styleUrls: ['../movies/movies.component.scss']
})
export class MoviesWithStarsComponent extends MoviesComponent {
  public override url:string='http://127.0.0.1:8000/movieswithstars/9/?page='
}


