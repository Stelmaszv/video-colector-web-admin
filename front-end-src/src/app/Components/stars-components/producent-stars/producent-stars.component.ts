import { Component,Input} from '@angular/core';
import {StarsComponent} from '../../list/stars/stars.component'

@Component({
  selector: 'app-producent-stars',
  templateUrl: '../../list/stars/stars.component.html',
  styleUrls: ['../../list/stars/stars.component.scss']
})
export class ProducentStarsComponent extends StarsComponent  {

  override url='http://127.0.0.1:8000/producentsstar/1/?page='
  @Input() ID:any=0
}

