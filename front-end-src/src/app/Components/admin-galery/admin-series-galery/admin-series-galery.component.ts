import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-admin-series-galery',
  templateUrl: './admin-series-galery.component.html',
  styleUrls: ['./admin-series-galery.component.scss']
})
export class AdminSeriesGaleryComponent extends BaseIDComponent {

  public generate_stan=false
  public override url = 'http://127.0.0.1:8000/serie/' 
  public edit_url='http://127.0.0.1:8000/serie/updata/'
  public galery_url='http://127.0.0.1:8000/series/photo/view/'

  

}
