import { Component} from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component'; 

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.scss']
})
export class ApstractAdminList extends BaseListComponent {
  override url='http://127.0.0.1:8000/movies?page='
  protected  override auth=true
}

