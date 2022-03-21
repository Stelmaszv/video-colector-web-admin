import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-base-items-sections',
  templateUrl: './base-items-sections.component.html',
  styleUrls: ['./base-items-sections.component.scss']
})
export class BaseItemsSectionsComponent extends BaseIDComponent {

  public override url = '' 
  protected override  auth=true

  public place:string=""
  public tag_url: string="";
  public tag_item_url = ""
  public tag_add_section='tags'

  public stars_url: string="";
  public stars_item_url = ""
  public stars_add_section=''

  public series_url: string="";
  public series_item_url = ""
  public series_add_section=''

  protected sections={
    'stars'  : false,
    'tags'   : false,
    'series' : false,
  }

  public show_section_stars():boolean
  {
    return this.sections['stars']
  }

  public show_section_tags():boolean
  {
    return this.sections['tags']
  }

  public show_section_series():boolean
  {
    return this.sections['series']
  }

  public return_series_url(){
    return this.series_url+this.id
  }

  public return_tag_url(){
    return this.tag_url+this.id
  }
  
  public return_stars_url(){
    return this.stars_url+this.id
  }
}
