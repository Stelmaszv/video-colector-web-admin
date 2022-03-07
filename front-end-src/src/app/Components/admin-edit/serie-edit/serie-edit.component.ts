import { Component, OnInit } from '@angular/core';
import { AbstractEditComponent } from '../abstract-edit/abstract-edit.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.scss']
})
export class SerieEditComponent extends AbstractEditComponent {
  override url='http://127.0.0.1:8000/serie/updata/'
  protected override auth:any=true
  public override Edit = new FormGroup({
    show_name: new FormControl(),
    country:new FormControl(),
    description: new FormControl(''),
    producent     :new FormControl(''),
  });

  protected override on_get_result(data:any){
    this.Edit = new FormGroup({
      show_name: new FormControl(data.show_name),
      country:new FormControl(data.country),
      description: new FormControl(data.description),
      date_relesed: new FormControl(data.date_relesed),
      producent     :new FormControl(data.Producent),
    });
  }

}
