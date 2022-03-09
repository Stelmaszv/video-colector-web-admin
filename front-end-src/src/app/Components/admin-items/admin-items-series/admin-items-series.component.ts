import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-series',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['../base-items-sections/base-items-sections.component.scss']
})
export class AdminItemsSeriesComponent extends BaseItemsSectionsComponent {

  public override url = 'http://127.0.0.1:8000/serie/' 

  public override tag_url: string="http://127.0.0.1:8000/series/tags/";
  public override tag_item_url = "http://127.0.0.1:8000/add/tag/serie/"
  public override tag_add_section='tags'

  protected override sections={
    'stars'  : false,
    'tags'   : true,
    'series' : false,
  }
}

