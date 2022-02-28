import { Component, OnInit } from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';

@Component({
  selector: 'app-admin-producent',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminProducentComponent extends ApstractAdminComponent {

  public override url:string='http://127.0.0.1:8000/admin/producent?page='
  protected override auth=true;
  protected override item_url='/producent'
  protected override edit_url='/admin/producent/edit'
  protected override galery_url='/admin/producent/galery'
  protected override tag_url='/admin/producent/tag'
  protected override stats_url='/admin/producent/stats'

}
