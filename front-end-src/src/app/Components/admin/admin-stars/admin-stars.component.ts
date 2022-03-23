import { Component, OnInit } from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';

@Component({
  selector: 'app-admin-stars',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminStarsComponent extends ApstractAdminComponent {

  public override url:string='api/admin/stars'
  public override delete_url:string='api/star/update'
  protected override auth=true;
  protected override item_url='/star'
  protected override edit_url='/admin/star/edit'
  protected override galery_url='/admin/star/galery'
  protected override tag_url='/admin/star/tag'
  protected override stats_url='/admin/star/stats'
  public override title: string="Admin Stars"

}
