import { Component} from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent extends BaseIDComponent {
  override url='http://127.0.0.1:8000/star/'
}
