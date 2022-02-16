import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../../movies-components/movies/movies.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: '../../movies-components/movies/movies.component.html',
  styleUrls: ['../../movies-components/movies/movies.component.scss']
})
export class MoviesListFavoritComponent extends MoviesComponent {
  public override url:string='http://127.0.0.1:8000/favorite/movies?page='
  protected override auth:any=true
}
