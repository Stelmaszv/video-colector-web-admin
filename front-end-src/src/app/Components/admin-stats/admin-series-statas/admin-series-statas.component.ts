import { Component, OnInit } from '@angular/core';
import { BaseStatsComponentIDComponent } from '../base-stats-component-id/base-stats-component-id.component';

@Component({
  selector: 'app-admin-series-statas',
  templateUrl: '../base-stats-component-id/base-stats-component-id.component.html',
  styleUrls: ['../base-stats-component-id/base-stats-component-id.component.scss']
})
export class AdminSeriesStatasComponent extends BaseStatsComponentIDComponent {

  public override url = 'api/serie/'
  public override liks_url='api/admin/stats/serie/laiks/' 
  public override disliks_url='api/admin/stats/serie/disliks/' 
  public override views_url='api/admin/stats/serie/views/'
  public override ratings_url='api/admin/stats/serie/ratings/'
  public override section='serie'
}

