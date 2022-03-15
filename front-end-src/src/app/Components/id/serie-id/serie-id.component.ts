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
  protected override add_to_like_url:string='serieaddtolike/'
  protected override add_to_rating_url:string='staraddtorating/'
  protected override add_to_dislike_url:string='serieaddtosislike/'
  protected override update_views_url:string='serieupdateview/'
  protected override fovorits_url:string='favorite/serie/'
  protected override chceck_favorit_stan_url='favoriteis/series/'
  protected override edit_url_heder:string='/admin/serie/edit/'

}
