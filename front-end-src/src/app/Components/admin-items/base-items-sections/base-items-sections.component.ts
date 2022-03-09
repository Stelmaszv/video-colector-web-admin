import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-base-items-sections',
  templateUrl: './base-items-sections.component.html',
  styleUrls: ['./base-items-sections.component.scss']
})
export class BaseItemsSectionsComponent extends BaseIDComponent {

  public override url = 'http://127.0.0.1:8000/movie/' 
  protected override  auth=true
  protected sections={
    'stars'  : true,
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
}
