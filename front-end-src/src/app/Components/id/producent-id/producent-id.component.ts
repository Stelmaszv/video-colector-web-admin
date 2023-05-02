import { Component} from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'

@Component({
  selector: 'app-producent-id',
  templateUrl: './producent-id.component.html',
  styleUrls: ['./producent-id.component.scss']
})
export class ProducentIdComponent extends BaseIDComponent {
  override url='api/producent/'
  protected override add_to_like_url:string='api/producentaddtolike/'
  protected override add_to_rating_url:string='api/producentaddtorating/'
  protected override add_to_dislike_url:string='api/producentaddtodislike/'
  protected override update_views_url:string='api/producentupdateviews/'
  protected override fovorits_url:string='api/favorite/movie/'
  protected override chceck_favorit_stan_url='api/favoriteis/movies/'
  protected override edit_url_heder:string='/admin/producent/edit/'
  protected override banner_url:string='api/producent/series/banners'
}


