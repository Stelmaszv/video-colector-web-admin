import { Component,Input} from '@angular/core';
import {StarsComponent} from '../../list/stars/stars.component'

@Component({
  selector: 'app-series-stars',
  templateUrl: '../../list/stars/stars.component.html',
  styleUrls: ['../../list/stars/stars.component.scss']
})
export class SeriesStarsComponent extends StarsComponent {
  start=true
  @Input() ID:any=0
  @Input() override title:string=''

  public override on_set_url():void
  {
    if (this.start){
      this.url='api/series/stars/'+this.ID+'?page='+this.page
    }
  }

}
