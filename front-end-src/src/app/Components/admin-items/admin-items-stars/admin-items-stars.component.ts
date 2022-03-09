import { Component, OnInit } from '@angular/core';
import { BaseItemsSectionsComponent } from '../base-items-sections/base-items-sections.component';

@Component({
  selector: 'app-admin-items-stars',
  templateUrl: '../base-items-sections/base-items-sections.component.html',
  styleUrls: ['../base-items-sections/base-items-sections.component.scss']
})
export class AdminItemsStarsComponent extends BaseItemsSectionsComponent {

  public override url = 'http://127.0.0.1:8000/star/' 

  public override tag_url: string="http://127.0.0.1:8000/star/tags/";
  public override tag_item_url = "http://127.0.0.1:8000/add/tag/star/"
  public override tag_add_section='tags'

  protected override sections={
    'stars'  : false,
    'tags'   : true,
    'series' : false,
  }

}
