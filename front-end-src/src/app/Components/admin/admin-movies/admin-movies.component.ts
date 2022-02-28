import { Component, OnInit } from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';

@Component({
  selector: 'app-admin-movies',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminMoviesComponent extends ApstractAdminComponent {

  public override url:string='http://127.0.0.1:8000/admin/movies?page='
  protected override auth=true;
  protected override item_url='/movie'
  protected override edit_url='/admin/movie'
  protected override galery_url='/admin/galery'
  protected override tag_url='/admin/tag'
  protected override stats_url='/admin/stats'

}
