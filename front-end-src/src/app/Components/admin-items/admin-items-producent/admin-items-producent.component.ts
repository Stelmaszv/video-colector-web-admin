import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-producent',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['../base-items-sections/base-items-sections.component.scss']
})
export class AdminItemsProducentComponent extends BaseItemsSectionsComponent {

  public override url = 'api/producent/' 

  public override tag_url: string="api/producent/tags/";
  public override tag_item_url = "api/add/tag/serie/"
  public override tag_add_section='tags'
  public override place:string="producent"

  public override series_url: string="api/producent/series/";
  public override series_item_url = "api/add/serie/producent/"
  public override series_add_section='series'

  protected override sections={
    'stars'  : false,
    'tags'   : true,
    'series' : true,
  }



}
