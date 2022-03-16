import { Component, Input, OnInit } from '@angular/core';
import { BaseListComponent } from '../list/base-list/base-list.component';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})

export class TopSectionComponent extends BaseListComponent {
  @Input() public section_title:String=''
  @Input() public override url:any
  protected override paginate=false
}
