import { Component,Input } from '@angular/core';
import {BasePhotosComponent} from '../base-photos/base-photos.component'

@Component({
  selector: 'app-star-photo',
  templateUrl: '../base-photos/base-photos.component.html',
  styleUrls: ['../base-photos/base-photos.component.scss']
})
export class StarPhotoComponent extends BasePhotosComponent {
  @Input() ID:any=0
  start=true

  public override on_set_url():void
  {
    if (this.start){
      this.url='http://127.0.0.1:8000/starsphoto/'+this.ID+'?page='
    }
  }

}