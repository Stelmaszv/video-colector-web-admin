import { Component, OnInit } from '@angular/core';
import { BaseItemListComponent } from '../base-item-list/base-item-list.component';

@Component({
  selector: 'app-admin-tags-items',
  templateUrl: '../base-item-list/base-item-list.component.html',
  styleUrls: ['./admin-tags-items.component.scss']
})
export class AdminTagsItemsComponent extends BaseItemListComponent {
  public override url: string="http://127.0.0.1:8000/movie/tags/";
  public override add_url: string="http://127.0.0.1:8000/movie/tag/";
  public override remowe_url: string="http://127.0.0.1:8000/movie/tag/";
  protected override item_url = "http://127.0.0.1:8000/add/tag/movie/"
  public override add_section='tags'
}