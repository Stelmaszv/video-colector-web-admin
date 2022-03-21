import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-series',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['../base-items-sections/base-items-sections.component.scss']
})
export class AdminItemsSeriesComponent extends BaseItemsSectionsComponent {

  public override url = 'api/serie/'
  public override place:string="serie"
 

  public override tag_url: string="api/series/tags/";
  public override tag_item_url = "api/add/tag/serie/"
  public override tag_add_section='tags'

  protected override sections={
    'stars'  : false,
    'tags'   : true,
    'series' : false,
  }
}

