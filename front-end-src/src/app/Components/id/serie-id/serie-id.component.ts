import { Component, OnInit } from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'
BaseIDComponent
@Component({
  selector: 'app-serie-id',
  templateUrl: './serie-id.component.html',
  styleUrls: ['./serie-id.component.scss']
})
export class SerieIdComponent extends BaseIDComponent {
  override url='http://127.0.0.1:8000/serie/'
  protected override add_to_like_url:string='movieaddtolike/'
  protected override add_to_rating_url:string='movieaddtorating/'
  protected override add_to_dislike_url:string='movieaddtodislike/'
  protected override update_views_url:string='movieaupdateviews/'
  protected override fovorits_url:string='movieaddfovorit/'
}
