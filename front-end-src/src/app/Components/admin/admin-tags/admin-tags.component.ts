import { Component} from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';

@Component({
  selector: 'app-admin-tags',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminTagsComponent extends ApstractAdminComponent {

  public override url:string='http://127.0.0.1:8000/admin/tags?page='
  protected override auth=true;
  protected override item_url='tag'

}

