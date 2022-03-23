import { Component, OnInit } from '@angular/core';
import { BaseGaleryAdminComponent } from '../base-galery-admin/base-galery-admin.component';

@Component({
  selector: 'app-stars-admin-galery',
  templateUrl: '../base-galery-admin/base-galery-admin.component.html',
  styleUrls: ['./stars-admin-galery.component.scss']
})
export class StarsAdminGaleryComponent extends BaseGaleryAdminComponent {
  public override generate_stan=false
  public override url = 'api/star/'
  public override edit_url='api/star/update/'
  public override galery_url='api/stars/photo/'
  public override section='star'
}
