import { Component} from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'
import { FormControl ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-producent',
  templateUrl: './producent.component.html',
  styleUrls: ['./producent.component.scss']
})
export class ProducentComponent extends BaseListComponent {
  override url='http://127.0.0.1:8000/producents'
  public override fav_url:string='http://127.0.0.1:8000/favorite/producents'
  protected override title:string='Producents'

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
