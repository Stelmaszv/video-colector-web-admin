import { Component, OnInit } from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'
BaseIDComponent
@Component({
  selector: 'app-serie-id',
  templateUrl: './serie-id.component.html',
  styleUrls: ['./serie-id.component.scss']
})
export class SerieIdComponent extends BaseIDComponent {
  override url='api/serie/'
  protected override add_to_like_url:string='api/serieaddtolike/'
  protected override add_to_rating_url:string='api/staraddtorating/'
  protected override add_to_dislike_url:string='api/serieaddtosislike/'
  protected override update_views_url:string='api/serieupdateview/'
  protected override fovorits_url:string='api/favorite/serie/'
  protected override chceck_favorit_stan_url='api/favoriteis/series/'
  protected override edit_url_heder:string='/admin/serie/edit/'
  protected override banner_url:string='api/producent/series/banners'

  override set_banner(id:number){
    if (this.banner_url){
      this.httpService.get_url(this.banner_url+'/'+id+'/').subscribe(
        (response) => {
          this.banner = this.random_banner(Object.values(response)[3])
        }
      );
    }
    if(this.banner == ''){
      if (this.banner_url){
        this.httpService.get_url('api/producent/series/banners/'+this.data.producent.id+'/').subscribe(
          (response) => {
            this.banner = this.random_banner(Object.values(response)[3])
          }
        );
      }
    }
  }

}
