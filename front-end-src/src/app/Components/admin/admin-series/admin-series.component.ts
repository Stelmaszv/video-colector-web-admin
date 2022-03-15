import { Component, OnInit } from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';
@Component({
  selector: 'app-admin-series',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminSeriesComponent extends ApstractAdminComponent {

  public override url:string='http://127.0.0.1:8000/admin/serie'
  public override delete_url:string='http://127.0.0.1:8000/serie/updata'
  protected override auth=true;
  protected override item_url='serie'
  public override title: string="Admin Serie"

}
