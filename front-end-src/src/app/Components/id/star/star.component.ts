import { Component} from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent extends BaseIDComponent {
  override url='http://127.0.0.1:8000/star/'
  protected override add_to_like_url:string='staraddtolike/'
  protected override add_to_rating_url:string='staraddrating/'
  protected override add_to_dislike_url:string='staraddtodislike/'
  protected override update_views_url:string='starupdateviews/'
  protected override fovorits_url:string='favorite/star/'
  protected override chceck_favorit_stan_url='favoriteis/stars/'
  protected override edit_url_heder:string='/admin/star/edit/'
  
}
