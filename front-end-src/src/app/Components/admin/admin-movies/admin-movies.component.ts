import { Component, OnInit } from '@angular/core';

import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.scss']
})
export class AdminMoviesComponent extends BaseListComponent {

  public override url:string='http://127.0.0.1:8000/admin/movies?page='
  protected override auth=true;
  public item_url='/movie'
  public edit_url='/admin/movie'
  public galery_url='/admin/galery'
  public tag_url='/admin/tag'
  public stats_url='/admin/stats'

  protected override on_set_results(movie:any):void
  {
    movie['item_url']=[this.item_url+'/',movie.id]
    movie['edit_url']=[this.edit_url+'/',movie.id]
    movie['galery_url']=[this.galery_url+'/',movie.id]
    movie['tag_url']=[this.tag_url+'/',movie.id]
    movie['stats_url']=[this.stats_url+'/',movie.id]
  }
}
