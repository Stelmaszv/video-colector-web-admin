import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-admin-stars-items',
  templateUrl: './admin-stars-items.component.html',
  styleUrls: ['./admin-stars-items.component.scss']
})
export class AdminStarsItemsComponent extends BaseListComponent {

  public override url: string="";

}
