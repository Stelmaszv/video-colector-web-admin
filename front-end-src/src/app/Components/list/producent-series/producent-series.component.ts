import { Component, OnInit,Input } from '@angular/core';
import {SeriesComponent} from '../series/series.component'

@Component({
  selector: 'app-producent-series',
  templateUrl: '../series/series.component.html',
  styleUrls: ['../series/series.component.scss']
})
export class ProducentSeriesComponent extends SeriesComponent {

  @Input() ID:any=0
  start=true
  @Input() override title:string=''

  public override on_set_url():void
  {
    if (this.start){
      this.url='api/producentsseries/'+this.ID+'?page='+this.page
    }
  }
}