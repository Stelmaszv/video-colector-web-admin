import { Component} from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-base-galery',
  templateUrl: './base-galery.component.html',
  styleUrls: ['./base-galery.component.scss']
})
export class BaseGaleryComponent extends BaseListComponent {

  public override url='http://127.0.0.1:8000/moviephotosview/1/?page'


  protected override on_set_results(movie: any): void {
    movie['stan']='cover'
  }

}
