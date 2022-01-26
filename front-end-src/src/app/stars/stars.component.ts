import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {BaseListComponent} from '../base-list/base-list.component'
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent extends BaseListComponent{
  protected override url='http://127.0.0.1:8000/stars'
}
