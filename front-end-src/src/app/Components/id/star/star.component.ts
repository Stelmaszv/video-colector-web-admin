import { Component} from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent extends BaseIDComponent {
  override url='api/star/'
  protected override add_to_like_url:string='api/staraddtolike/'
  protected override add_to_rating_url:string='api/staraddrating/'
  protected override add_to_dislike_url:string='api/staraddtodislike/'
  protected override update_views_url:string='api/starupdateviews/'
  protected override fovorits_url:string='api/favorite/star/'
  protected override chceck_favorit_stan_url='api/favoriteis/stars/'
  protected override edit_url_heder:string='/admin/star/edit/'
  
}
