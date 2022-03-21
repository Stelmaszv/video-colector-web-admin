import { Component} from '@angular/core';
import { BaseStatsComponentIDComponent } from '../base-stats-component-id/base-stats-component-id.component';

@Component({
  selector: 'app-admin-movies-stats',
  templateUrl: '../base-stats-component-id/base-stats-component-id.component.html',
  styleUrls: ['../base-stats-component-id/base-stats-component-id.component.scss']
})
export class AdminMoviesStatsComponent extends BaseStatsComponentIDComponent {

  public override url = 'api/movie/'
  public override liks_url='api/admin/stats/movie/laiks/' 
  public override disliks_url='api/admin/stats/movie/disliks/' 
  public override views_url='api/admin/stats/movie/views/'
  public override ratings_url='api/admin/stats/movie/ratings/'
  public override section='movie'

}
