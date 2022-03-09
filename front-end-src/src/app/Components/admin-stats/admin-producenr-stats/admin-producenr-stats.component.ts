import { Component, OnInit } from '@angular/core';
import { BaseStatsComponentIDComponent } from '../base-stats-component-id/base-stats-component-id.component';

@Component({
  selector: 'app-admin-producenr-stats',
  templateUrl: '../base-stats-component-id/base-stats-component-id.component.html',
  styleUrls: ['../base-stats-component-id/base-stats-component-id.component.scss']
})
export class AdminProducenrStatsComponent extends BaseStatsComponentIDComponent {

  public override url = 'http://127.0.0.1:8000/producent/'
  public override liks_url='http://127.0.0.1:8000/admin/stats/producent/laiks/' 
  public override disliks_url='http://127.0.0.1:8000/admin/stats/producent/disliks/' 
  public override views_url='http://127.0.0.1:8000/admin/stats/producent/views/'
  public override ratings_url='http://127.0.0.1:8000/admin/stats/producent/ratings/'
  public override section='producent'

}
