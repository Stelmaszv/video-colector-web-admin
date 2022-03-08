import { Component, OnInit } from '@angular/core';
import { BaseStatsComponentIDComponent } from '../base-stats-component-id/base-stats-component-id.component';

@Component({
  selector: 'app-admin-stars-statas',
  templateUrl: '../base-stats-component-id/base-stats-component-id.component.html',
  styleUrls: ['../base-stats-component-id/base-stats-component-id.component.scss']
})
export class AdminStarsStatasComponent extends BaseStatsComponentIDComponent {

  public override url = 'http://127.0.0.1:8000/star/'
  public override liks_url='http://127.0.0.1:8000/admin/stats/star/laiks/' 
  public override disliks_url='http://127.0.0.1:8000/admin/stats/star/disliks/' 
  public override views_url='http://127.0.0.1:8000/admin/stats/star/views/'
  public override ratings_url='http://127.0.0.1:8000/admin/stats/star/ratings/'

}
