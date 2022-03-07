import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-producent-admin-galery',
  templateUrl: './producent-admin-galery.component.html',
  styleUrls: ['./producent-admin-galery.component.scss']
})
export class ProducentAdminGaleryComponent extends BaseIDComponent {
  public generate_stan=false
  public override url = 'http://127.0.0.1:8000/producent/' 
  public edit_url='http://127.0.0.1:8000/producent/updata/'
  public galery_url='http://127.0.0.1:8000/producent/photos/'
}
