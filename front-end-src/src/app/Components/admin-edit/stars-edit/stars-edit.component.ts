import { Component} from '@angular/core';
import { AbstractEditComponent } from '../abstract-edit/abstract-edit.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stars-edit',
  templateUrl: './stars-edit.component.html',
  styleUrls: ['./stars-edit.component.scss']
})
export class StarsEditComponent extends AbstractEditComponent {

  override url='http://127.0.0.1:8000/star/update/'
  protected override auth:any=true

  public override Edit = new FormGroup({
    show_name: new FormControl(),
    description: new FormControl(),
    weight:      new FormControl(0), 
    height:      new FormControl(0),
    ethnicity:   new FormControl(),
    hair_color:   new FormControl(),
    nationality:   new FormControl(),
    date_of_birth:   new FormControl()
  });

  protected override on_get_result(data:any){
    this.Edit = new FormGroup({
      show_name: new FormControl(data.show_name),
      description: new FormControl(data.description),
      weight: new FormControl(data.weight),
      height:      new FormControl(data.height),
      ethnicity:   new FormControl(data.ethnicity),
      hair_color:   new FormControl(data.hair_color),
      nationality:   new FormControl(data.nationality),
      date_of_birth:   new FormControl(data.date_of_birth)
    });
  }

}
