import { Component} from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';
@Component({
  selector: 'app-abstract-edit',
  templateUrl: './abstract-edit.component.html',
  styleUrls: ['./abstract-edit.component.scss']
})
export class AbstractEditComponent extends BaseIDComponent {}
