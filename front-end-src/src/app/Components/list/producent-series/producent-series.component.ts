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

  public override on_set_url():void
  {
    if (this.start){
      this.url='http://127.0.0.1:8000/producentsseries/'+this.ID
    }
  }
}