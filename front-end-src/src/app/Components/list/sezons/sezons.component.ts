import { Component, OnInit,Input } from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'

@Component({
  selector: 'app-sezons',
  templateUrl: './sezons.component.html',
  styleUrls: ['./sezons.component.scss']
})
export class SezonsComponent extends BaseListComponent {
  
  @Input() ID:any=0

  public override on_set_url():void
  {
    this.url = 'api/serie/season/'+this.ID+'?page='+this.page
  }
}
