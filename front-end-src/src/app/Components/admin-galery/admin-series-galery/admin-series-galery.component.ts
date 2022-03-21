import { Component, OnInit } from '@angular/core';
import { BaseGaleryAdminComponent } from '../base-galery-admin/base-galery-admin.component';

@Component({
  selector: 'app-admin-series-galery',
  templateUrl: '../base-galery-admin/base-galery-admin.component.html',
  styleUrls: ['./admin-series-galery.component.scss']
})
export class AdminSeriesGaleryComponent extends BaseGaleryAdminComponent {
  public override generate_stan=false
  public override url = 'api/serie/' 
  public override edit_url='api/serie/updata/'
  public override galery_url='api/series/photo/'
  public override section='serie'
}
