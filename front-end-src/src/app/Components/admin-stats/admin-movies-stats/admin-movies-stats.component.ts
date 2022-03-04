import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-admin-movies-stats',
  templateUrl: './admin-movies-stats.component.html',
  styleUrls: ['./admin-movies-stats.component.scss']
})
export class AdminMoviesStatsComponent extends BaseIDComponent {

  public override url = 'http://127.0.0.1:8000/movie/' 
  protected override  auth=true

}
