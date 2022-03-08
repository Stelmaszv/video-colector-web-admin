import { Component, OnInit } from '@angular/core';
import { BaseGaleryAdminComponent } from '../base-galery-admin/base-galery-admin.component';

@Component({
  selector: 'app-producent-admin-galery',
  templateUrl: '../base-galery-admin/base-galery-admin.component.html',
  styleUrls: ['./producent-admin-galery.component.scss']
})
export class ProducentAdminGaleryComponent extends BaseGaleryAdminComponent {
  public override generate_stan=false
  public override url = 'http://127.0.0.1:8000/producent/' 
  public override edit_url='http://127.0.0.1:8000/producent/updata/'
  public override galery_url='http://127.0.0.1:8000/producent/photo/'
  public override section='producent'
}
