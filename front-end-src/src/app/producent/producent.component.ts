import { Component} from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'
@Component({
  selector: 'app-producent',
  templateUrl: './producent.component.html',
  styleUrls: ['./producent.component.scss']
})
export class ProducentComponent extends BaseListComponent {
  protected override url='http://127.0.0.1:8000/producents'
}
