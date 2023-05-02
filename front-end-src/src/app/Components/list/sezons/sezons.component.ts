import { Component, OnInit } from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'

@Component({
  selector: 'app-sezons',
  templateUrl: './sezons.component.html',
  styleUrls: ['./sezons.component.scss']
})
export class SezonsComponent extends BaseListComponent {
  override url='api/serie/season/1'

  public override on_set_url():void
  {
    this.url='api/serie/season/1?page='+this.page
  }
}
