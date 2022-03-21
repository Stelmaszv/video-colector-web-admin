import { Component, OnInit } from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';

@Component({
  selector: 'app-admin-producent',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminProducentComponent extends ApstractAdminComponent {

  public override url:string='api/admin/producent'
  public override delete_url:string='api/producent/updata'
  protected override auth=true;
  protected override item_url='producent'
  public override title: string="Admin Producents"

}
