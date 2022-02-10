import { Component} from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'

@Component({
  selector: 'app-producent-id',
  templateUrl: './producent-id.component.html',
  styleUrls: ['./producent-id.component.scss']
})
export class ProducentIdComponent extends BaseIDComponent {
  override url='http://127.0.0.1:8000/producent/'
  protected override add_to_like_url:string='producentaddtolike/'
  protected override add_to_rating_url:string='producentaddtorating/'
  protected override add_to_dislike_url:string='producentaddtodislike/'
  protected override update_views_url:string='producentupdateviews/'
  protected override fovorits_url:string='producentaddtofavorite/'
}


