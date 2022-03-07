import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-stars-admin-galery',
  templateUrl: './stars-admin-galery.component.html',
  styleUrls: ['./stars-admin-galery.component.scss']
})
export class StarsAdminGaleryComponent extends BaseIDComponent {
  public generate_stan=false
  public override url = 'http://127.0.0.1:8000/star/' 
  public edit_url='http://127.0.0.1:8000/star/update/'
  public galery_url='http://127.0.0.1:8000/stars/photo/'
}
