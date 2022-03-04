import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';

@Component({
  selector: 'app-admin-items-movies',
  templateUrl: './admin-items-movies.component.html',
  styleUrls: ['./admin-items-movies.component.scss']
})
export class AdminItemsMoviesComponent extends BaseIDComponent {

  public override url = 'http://127.0.0.1:8000/movie/' 
  protected override  auth=true


}
