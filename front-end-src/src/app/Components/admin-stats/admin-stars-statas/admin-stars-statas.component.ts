import { Component, OnInit } from '@angular/core';
import { BaseStatsComponentIDComponent } from '../base-stats-component-id/base-stats-component-id.component';

@Component({
  selector: 'app-admin-stars-statas',
  templateUrl: '../base-stats-component-id/base-stats-component-id.component.html',
  styleUrls: ['../base-stats-component-id/base-stats-component-id.component.scss']
})
export class AdminStarsStatasComponent extends BaseStatsComponentIDComponent {

  public override url = 'api/star/'
  public override liks_url='api/admin/stats/star/laiks/' 
  public override disliks_url='api/admin/stats/star/disliks/' 
  public override views_url='api/admin/stats/star/views/'
  public override ratings_url='api/admin/stats/star/ratings/'
  public override section='star'

}
