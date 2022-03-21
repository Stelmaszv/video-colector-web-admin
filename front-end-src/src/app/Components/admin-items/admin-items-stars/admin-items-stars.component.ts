import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-stars',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['../base-items-sections/base-items-sections.component.scss']
})
export class AdminItemsStarsComponent extends BaseItemsSectionsComponent {

  public override url = 'api/star/' 
  public override place:string="star"

  public override tag_url: string="api/star/tags/";
  public override tag_item_url = "api/add/tag/star/"
  public override tag_add_section='tags'

  protected override sections={
    'stars'  : false,
    'tags'   : true,
    'series' : false,
  }

}
