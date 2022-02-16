import { Component, OnInit } from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'
import { FormControl ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent extends BaseListComponent {
  override url='http://127.0.0.1:8000/series?page='
  public override fav_url:string='http://127.0.0.1:8000/favorite/series?page='

  public override search = new FormGroup({
    name: new FormControl(),
    serie: new FormControl(),
    likes_count: new FormControl(),
    producent: new FormControl(),
    avg_rating:  new FormControl(),
    ratings_count:new FormControl(),
    disLikes_count:new FormControl(),
    country:new FormControl()
  });

}
