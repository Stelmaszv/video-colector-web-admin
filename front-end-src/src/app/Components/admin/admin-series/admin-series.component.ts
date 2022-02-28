import { Component, OnInit } from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';
@Component({
  selector: 'app-admin-series',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminSeriesComponent extends ApstractAdminComponent {

  public override url:string='http://127.0.0.1:8000/admin/serie?page='
  protected override auth=true;
  protected override item_url='/serie'
  protected override edit_url='/admin/serie/edit'
  protected override galery_url='/admin/serie/galery'
  protected override tag_url='/admin/serie/tag'
  protected override stats_url='/admin/serie/stats'

}
