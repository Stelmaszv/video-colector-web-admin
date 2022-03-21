import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-movies',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['./admin-items-movies.component.scss']
})
export class AdminItemsMoviesComponent extends BaseItemsSectionsComponent {
  public override url = 'api/movie/' 
  public override place:string="movie"

  public override tag_url: string="api/movie/tags/";
  public override tag_item_url = "api/add/tag/movie/"
  public override tag_add_section='tags'

  public override stars_url: string="api/movie/stars/";
  public override stars_item_url = "api/add/star/movie/"
  public override stars_add_section='stars'

  protected override sections={
    'stars'  : true,
    'tags'   : true,
    'series' : false,
  }
}
