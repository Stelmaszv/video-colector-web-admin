import { Component, OnInit } from '@angular/core';
import { BaseStatsComponentIDComponent } from '../base-stats-component-id/base-stats-component-id.component';

@Component({
  selector: 'app-admin-series-statas',
  templateUrl: '../base-stats-component-id/base-stats-component-id.component.html',
  styleUrls: ['../base-stats-component-id/base-stats-component-id.component.scss']
})
export class AdminSeriesStatasComponent extends BaseStatsComponentIDComponent {

  public override url = 'http://127.0.0.1:8000/serie/'
  public override liks_url='http://127.0.0.1:8000/admin/stats/serie/laiks/' 
  public override disliks_url='http://127.0.0.1:8000/admin/stats/serie/disliks/' 
  public override views_url='http://127.0.0.1:8000/admin/stats/serie/views/'
  public override ratings_url='http://127.0.0.1:8000/admin/stats/serie/ratings/'
  public override section='serie'
}

