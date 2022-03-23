import { Component, OnInit } from '@angular/core';
import { BaseStatsComponentIDComponent } from '../base-stats-component-id/base-stats-component-id.component';

@Component({
  selector: 'app-admin-producenr-stats',
  templateUrl: '../base-stats-component-id/base-stats-component-id.component.html',
  styleUrls: ['../base-stats-component-id/base-stats-component-id.component.scss']
})
export class AdminProducenrStatsComponent extends BaseStatsComponentIDComponent {

  public override url = 'api/producent/'
  public override liks_url='api/admin/stats/producent/laiks/' 
  public override disliks_url='api/admin/stats/producent/disliks/' 
  public override views_url='api/admin/stats/producent/views/'
  public override ratings_url='api/admin/stats/producent/ratings/'
  public override section='producent'

}
