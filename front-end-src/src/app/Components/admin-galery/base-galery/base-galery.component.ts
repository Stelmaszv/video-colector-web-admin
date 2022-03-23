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
  @Input() public delete_url='api/admin/galery/movie/delete/'
  @Input() movies:any=false
  @Input() cover:any=''
  @Input() poster:any=''
  @Input() id:any=0
  protected override debug: any=true;
  protected override auth: any=true;
  protected override no_title:boolean=true

  public override on_set_url():void
  {
    this.url=this.store_url+this.id+'?page='+this.page
  } 

  public update_poster(url:any,index:number){
    this.update(url,'poster')
    this.update_data_stan('is_poster')
    this.update_elemnt_photo('.poster',url)
    this.update_elemnt_photo('.poster_small',url)
    this.data[index]['is_poster']=true
  }

  private update_data_stan(key:string){
    for (let el of this.data){
      if(el[key]==true){
        el[key]=false
      }
    }
  }

  private update_elemnt_photo(selector:string,url:string){
    let domEl: HTMLElement | null = document.querySelector(selector);
    domEl && (domEl.setAttribute('src',url));
  }

  public update_cover(url:any,index:number){
    this.update(url,'avatar')
    this.update_data_stan('is_cover')
    this.update_elemnt_photo('.avatar',url)
    this.update_elemnt_photo('.avatar_small',url)
    this.data[index]['is_cover']=true
  }

  public delete_photo(url:any,index:number){
    this.httpService.get_url_auth(this.delete_url+''+this.id+'/?delete='+url).subscribe(respanse=>{
      console.log(respanse)
    })
    this.data.splice(index,1)
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
  }

  private is_cover(movie:any){
    return (movie.show_url==this.cover)
  }

  private is_poster(movie:any){
    return (movie.show_url==this.poster)
  }
}
