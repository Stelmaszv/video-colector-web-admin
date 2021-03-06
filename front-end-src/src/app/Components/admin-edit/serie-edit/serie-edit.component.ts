import { Component} from '@angular/core';
import { AbstractEditComponent } from '../abstract-edit/abstract-edit.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.scss']
})

export class SerieEditComponent extends AbstractEditComponent {
  override url='api/serie/updata/'
  protected override auth:any=true
  public override Edit = new FormGroup({
    show_name: new FormControl(),
    country:new FormControl(),
    description: new FormControl(),
    Producent     :new FormControl(),
  });

  protected override on_get_result(data:any){
    this.Edit = new FormGroup({
      show_name: new FormControl(data.show_name),
      country:new FormControl(data.country),
      description: new FormControl(data.description),
      Producent     :new FormControl(data.Producent),
    });
  }
}