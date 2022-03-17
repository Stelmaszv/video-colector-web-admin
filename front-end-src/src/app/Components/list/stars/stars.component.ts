import { Component} from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'
import { FormControl ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent extends BaseListComponent{
  override url='http://127.0.0.1:8000/stars'
  public override fav_url:string='http://127.0.0.1:8000/favorite/stars'
  protected override debug: any=true
  public override title:string='Stars'

  public override search = new FormGroup({
    name: new FormControl(),
    serie: new FormControl(),
    likes_count: new FormControl(),
    producent: new FormControl(),
    avg_rating:  new FormControl(),
    ratings_count:new FormControl(),
    disLikes_count:new FormControl(),
    nationality:new FormControl(),
    weight:new FormControl(),
    height:new FormControl(),
    ethnicity:new FormControl(),
    hair_color:new FormControl(),
    birth_place:new FormControl()
  });

}
