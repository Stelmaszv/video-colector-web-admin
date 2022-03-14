import { Component,Input} from '@angular/core';
import {BaseListComponent} from '../../list/base-list/base-list.component'
import { FormControl ,FormGroup} from '@angular/forms';
import { StringLenghtPipe } from 'src/app/Pipe/string-lenght/string-lenght.pipe';
import { NamePipe } from 'src/app/Pipe/name/name.pipe';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent extends BaseListComponent{
  public mode:string ='cover'
  found_top='150px'
  public override title: string='Movies';
  
  public override url:string='http://127.0.0.1:8000/movies'
  public override fav_url:string='http://127.0.0.1:8000/favorite/movies'
  
  public override search = new FormGroup({
    name: new FormControl(),
    serie: new FormControl(),
    likes_count: new FormControl(),
    producent: new FormControl(),
    avg_rating:  new FormControl(),
    ratings_count:new FormControl(),
    disLikes_count:new FormControl(),
    country:new FormControl()
  });

  public onInitID(){

  }

  public override onInit(){
      this.onInitID()
      this.tags_form=[]
      this.stars_form=[]
      this.load_select()
  }

  public change_mode(){
    if (this.mode=='cover'){
      this.mode='poster'
    }else if(this.mode=='poster'){
      this.mode='cover'
    }
  }

  protected override on_set_results(movie:any):any
  {
    movie['name_pip'] =    new NamePipe().transform(movie)
  }
}
