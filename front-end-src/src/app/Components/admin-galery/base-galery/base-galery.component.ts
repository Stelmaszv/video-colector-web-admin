import { Component,Input} from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-base-galery',
  templateUrl: './base-galery.component.html',
  styleUrls: ['./base-galery.component.scss']
})
export class BaseGaleryComponent extends BaseListComponent {
  @Input() public override url=''
  @Input() public edit_url=''
  @Input() public delete_url='http://127.0.0.1:8000/admin/galery/movie/delete/'
  @Input() movies:any=false
  @Input() cover:any=''
  @Input() poster:any=''
  @Input() id:any=0
  protected override debug: any=true;
  protected override auth: any=true;

  public override on_before_load_data():void
  {
    this.url=this.url+this.id
  } 

  public update_poster(url:any){
    this.update(url,'poster')
  }

  public update_cover(url:any){
    this.update(url,'avatar')
  }

  public delete_photo(url:any){
    this.httpService.get_url_auth(this.delete_url+''+this.id+'/?delete='+url).subscribe(respanse=>{
      console.log(respanse)
    })
    window.location.reload()
  }

  protected override on_set_results(movie: any): void {
    movie['show_url']='http://127.0.0.1:8000/'+movie['url']
    movie['is_cover'] = this.is_cover(movie)
    movie['is_poster']= this.is_poster(movie)
  }

  private update(url:any,index:any){
    let json:any={}
    json[index]=url
    this.httpService.put_url(this.edit_url+''+this.id+'/',json).subscribe(respanse=>{
      console.log(respanse)
    })
    window.location.reload()
  }

  private is_cover(movie:any){
    return (movie.show_url==this.cover)
  }

  private is_poster(movie:any){
    return (movie.show_url==this.poster)
  }
}
