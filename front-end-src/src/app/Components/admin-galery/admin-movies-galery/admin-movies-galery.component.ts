import { Component} from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-movies-galery',
  templateUrl: './admin-movies-galery.component.html',
  styleUrls: ['./admin-movies-galery.component.scss']
})
export class AdminMoviesGaleryComponent extends BaseIDComponent {
  public override url = 'http://127.0.0.1:8000/movie/' 
  public galery_url='http://127.0.0.1:8000/moviephotosview/'
  public edit_url='http://127.0.0.1:8000/movieupdata/'

  photos = new FormGroup({
    number: new FormControl(0),
  });

  public generate_photos(){
    console.log(this.photos.value.number)
  }
}
