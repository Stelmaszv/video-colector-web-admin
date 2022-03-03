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
  public generate_url="http://127.0.0.1:8000/admin/galery/generate/moviecap/"

  photos = new FormGroup({
    number: new FormControl(0),
  });

  public generate_photos(){
    if (this.photos.value.number){
      console.log(this.photos.value.number)
      this.httpService.get_url_auth(this.generate_url+''+this.id+'/?genrate='+this.photos.value.number).subscribe(respanse=>{
        console.log(respanse)
        window.location.reload()
      })
    }
  }
}
