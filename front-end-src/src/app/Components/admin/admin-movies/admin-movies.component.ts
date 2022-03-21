import { Component} from '@angular/core';
import { ApstractAdminComponent } from '../apstract-admin/apstract-admin.component';

@Component({
  selector: 'app-admin-movies',
  templateUrl: '../apstract-admin/apstract-admin.component.html',
  styleUrls: ['../apstract-admin/apstract-admin.component.scss']
})
export class AdminMoviesComponent extends ApstractAdminComponent {

  public override url:string='api/admin/movies'
  public override delete_url:string='api/movieupdata'
  protected override auth=true;
  protected override item_url='/movie'
  public override title: string="Admin Movies"
}
