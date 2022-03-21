import { Component} from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';

@Component({
  selector: 'app-admin-tags',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminTagsComponent extends ApstractAdminComponent {

  public override url:string='api/admin/tags'
  protected override auth=true;
  protected override item_url='tag'
  public override title: string="Admin Tags"

}

