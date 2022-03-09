import { Component, Input} from '@angular/core';
import { BaseItemListComponent } from '../base-item-list/base-item-list.component';

@Component({
  selector: 'app-admin-stars-items',
  templateUrl: '../base-item-list/base-item-list.component.html',
  styleUrls: ['./admin-stars-items.component.scss']
})
export class AdminStarsItemsComponent extends BaseItemListComponent {
  public override url: string="http://127.0.0.1:8000/movie/stars/";
  protected override item_url = "http://127.0.0.1:8000/add/star/movie/"
  public override add_section='stars'
}
