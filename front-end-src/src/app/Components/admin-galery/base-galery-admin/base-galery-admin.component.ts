import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-base-galery-admin',
  templateUrl: './base-galery-admin.component.html',
  styleUrls: ['./base-galery-admin.component.scss']
})
export class BaseGaleryAdminComponent extends BaseIDComponent {
  public generate_stan=false
  public override url = '' 
  public edit_url=''
  public galery_url=''
  public section=''
}
