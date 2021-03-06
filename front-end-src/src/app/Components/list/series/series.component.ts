import { Component} from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'
import { FormControl ,FormGroup} from '@angular/forms';
import { DescPipe } from 'src/app/Pipe/desc-pip/desc.pipe';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent extends BaseListComponent {
  override url='api/series'
  public override fav_url:string='api/favorite/series'
  public override title:string='Series'
  protected override debug: any=true

  public override search = new FormGroup({
    name: new FormControl(),
    serie: new FormControl(),
    likes_count: new FormControl(),
    Producent: new FormControl(),
    avg_rating:  new FormControl(),
    ratings_count:new FormControl(),
    disLikes_count:new FormControl(),
    country:new FormControl()
  });

  protected override on_set_results(movie:any):void
  {
    movie['description'] =    new DescPipe().transform(movie)
  }

}
