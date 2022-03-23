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

  public override on_set_url():void
  {
    if (this.start){
      this.url='api/series/photo/'+this.ID+'?page='+this.page
    }
  }
}








