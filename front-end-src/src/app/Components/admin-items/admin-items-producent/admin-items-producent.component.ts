import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-producent',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['../base-items-sections/base-items-sections.component.scss']
})
export class AdminItemsProducentComponent extends BaseItemsSectionsComponent {

  public override url = 'http://127.0.0.1:8000/producent/' 

  public override tag_url: string="http://127.0.0.1:8000/series/tags/";
  public override tag_item_url = "http://127.0.0.1:8000/add/tag/serie/"
  public override tag_add_section='tags'
  public override place:string="producent"

  public override series_url: string="http://127.0.0.1:8000/producent/tags/";
  public override series_item_url = "http://127.0.0.1:8000/add/tag/producent/"
  public override series_add_section='series'

  protected override sections={
    'stars'  : false,
    'tags'   : true,
    'series' : true,
  }

}
