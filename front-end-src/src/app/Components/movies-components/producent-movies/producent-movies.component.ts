import {MoviesComponent} from '../movies/movies.component'
import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-producent-movies',
  templateUrl: '../movies/movies.component.html',
  styleUrls: ['../movies/movies.component.scss']
})
export class ProducentMoviesComponent extends MoviesComponent {

  @Input() ID:any=0
  @Input() override title:string=''
  start=true

  public override on_set_url():void
  {
    if (this.start){
      this.url='http://127.0.0.1:8000/producentsmovies/'+this.ID
    }
  }

}
