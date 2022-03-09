import { Component, OnInit } from '@angular/core';
import { BaseItemListComponent } from '../base-item-list/base-item-list.component';

@Component({
  selector: 'app-admin-items-series',
  templateUrl: '../base-item-list/base-item-list.component.html',
  styleUrls: ['./admin-items-series.component.scss']
})
export class AdminItemsSeriesComponent extends BaseItemListComponent {
  public override url: string="http://127.0.0.1:8000/producent/series/";
  protected override item_url = "http://127.0.0.1:8000/add/serie/producent/"
  public override add_section='series'
}