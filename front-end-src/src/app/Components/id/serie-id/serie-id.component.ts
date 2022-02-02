import { Component, OnInit } from '@angular/core';
import {BaseIDComponent} from '../base-id/base-id.component'
BaseIDComponent
@Component({
  selector: 'app-serie-id',
  templateUrl: './serie-id.component.html',
  styleUrls: ['./serie-id.component.scss']
})
export class SerieIdComponent extends BaseIDComponent {
  override url='http://127.0.0.1:8000/serie/'
}
