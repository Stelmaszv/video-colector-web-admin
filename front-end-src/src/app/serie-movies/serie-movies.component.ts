import { Component, Input, OnInit } from '@angular/core';
import {MoviesComponent} from '../movies/movies.component'

@Component({
  selector: 'app-serie-movies',
  templateUrl: '../movies/movies.component.html',
  styleUrls: ['../movies/movies.component.scss']
})
export class SerieMoviesComponent extends MoviesComponent {
  public override url:string='http://127.0.0.1:8000/seriemoviesview/1/?page='
}
