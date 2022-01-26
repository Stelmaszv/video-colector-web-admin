import { Component} from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent extends BaseListComponent{
  override url='http://127.0.0.1:8000/stars'
}
