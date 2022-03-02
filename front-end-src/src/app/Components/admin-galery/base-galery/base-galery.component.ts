import { Component,Input} from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-base-galery',
  templateUrl: './base-galery.component.html',
  styleUrls: ['./base-galery.component.scss']
})
export class BaseGaleryComponent extends BaseListComponent {

  public override url='http://127.0.0.1:8000/moviephotosview/'
  protected override debug:any=true
  @Input() cover:any=''
  @Input() poster:any=''
  @Input() id:any=0

  private is_cover(movie:any){
    return (movie.url==this.cover)
  }

  private is_poster(movie:any){
    return (movie.url==this.poster)
  }

  public override on_before_load_data():void
  {
    this.url=this.url+this.id
  } 

  protected override on_set_results(movie: any): void {
    movie['url']='http://127.0.0.1:8000/'+movie['url']
    movie['is_cover'] = this.is_cover(movie)
    movie['is_poster']= this.is_poster(movie)
  }


}
