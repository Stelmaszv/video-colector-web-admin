import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-movies',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['./admin-items-movies.component.scss']
})
export class AdminItemsMoviesComponent extends BaseItemsSectionsComponent {
  public override url = 'http://127.0.0.1:8000/movie/' 
  protected override sections={
    'stars'  : true,
    'tags'   : true,
    'series' : false,
  }
}
