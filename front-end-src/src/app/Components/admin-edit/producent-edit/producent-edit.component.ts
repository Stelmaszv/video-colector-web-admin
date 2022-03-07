import { Component} from '@angular/core';
import { AbstractEditComponent } from '../abstract-edit/abstract-edit.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-producent-edit',
  templateUrl: './producent-edit.component.html',
  styleUrls: ['./producent-edit.component.scss']
})
export class ProducentEditComponent extends AbstractEditComponent {

  override url='http://127.0.0.1:8000/producent/updata/1/'
  protected override auth:any=true

  public override Edit = new FormGroup({
    show_name: new FormControl(),
    country:new FormControl(),
    description: new FormControl(),
    year: new FormControl()
  });

  protected override on_get_result(data:any){
    this.Edit = new FormGroup({
      show_name: new FormControl(data.show_name),
      country:new FormControl(data.country),
      description: new FormControl(data.description),
      year: new FormControl(data.year)
    });
  }

}
