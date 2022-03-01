import { Component, OnInit } from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-abstract-edit',
  templateUrl: './abstract-edit.component.html',
  styleUrls: ['./abstract-edit.component.scss']
})
export class AbstractEditComponent extends BaseIDComponent {

  public Edit = new FormGroup({});

  

}
