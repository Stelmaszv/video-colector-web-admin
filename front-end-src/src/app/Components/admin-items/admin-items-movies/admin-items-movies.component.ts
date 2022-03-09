import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-movies',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['./admin-items-movies.component.scss']
})
export class AdminItemsMoviesComponent extends BaseItemsSectionsComponent {
  public override url = 'http://127.0.0.1:8000/movie/' 

  public override tag_url: string="http://127.0.0.1:8000/movie/tags/";
  public override tag_item_url = "http://127.0.0.1:8000/add/tag/movie/"
  public override tag_add_section='tags'

  public override stars_url: string="http://127.0.0.1:8000/movie/stars/";
  public override stars_item_url = "http://127.0.0.1:8000/add/star/movie/"
  public override stars_add_section='stars'

  protected override sections={
    'stars'  : true,
    'tags'   : true,
    'series' : false,
  }
}
