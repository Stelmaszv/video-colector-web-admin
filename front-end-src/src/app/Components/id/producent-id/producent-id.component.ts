import { Component} from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'

@Component({
  selector: 'app-producent-id',
  templateUrl: './producent-id.component.html',
  styleUrls: ['./producent-id.component.scss']
})
export class ProducentIdComponent extends BaseIDComponent {
  override url='http://127.0.0.1:8000/producent/'
}


