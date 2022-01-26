import { Component, OnInit } from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent extends BaseListComponent {

  override url='http://127.0.0.1:8000/series'

}
