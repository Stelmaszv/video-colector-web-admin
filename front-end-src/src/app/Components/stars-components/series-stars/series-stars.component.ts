import { Component,Input} from '@angular/core';
import {StarsComponent} from '../../list/stars/stars.component'

@Component({
  selector: 'app-series-stars',
  templateUrl: '../../list/stars/stars.component.html',
  styleUrls: ['../../list/stars/stars.component.scss']
})
export class SeriesStarsComponent extends StarsComponent {
  override url='http://127.0.0.1:8000/seriesstarsview/1/?page='

  @Input() ID:any=0

}
