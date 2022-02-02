import { Component,Input } from '@angular/core';
import {BasePhotosComponent} from '../base-photos/base-photos.component'

@Component({
  selector: 'app-serie-photos',
  templateUrl: '../base-photos/base-photos.component.html',
  styleUrls: ['../base-photos/base-photos.component.scss']
})
export class SeriePhotosComponent extends BasePhotosComponent {

  @Input() ID:any=0
  start=true
  protected override data_type='photo'

  public override on_set_url():void
  {
    if (this.start){
      this.url='http://127.0.0.1:8000/seriesphotoview/'+this.ID+'?page='
    }
  }
}








