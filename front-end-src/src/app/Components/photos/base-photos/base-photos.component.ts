import { Component,Input} from '@angular/core';
import {BaseListComponent} from '../../list/base-list/base-list.component'
@Component({
  selector: 'app-base-photos',
  templateUrl: './base-photos.component.html',
  styleUrls: ['./base-photos.component.scss']
})
export class BasePhotosComponent extends BaseListComponent {
  public big_photo_url:any
  public photo:any
  public next:any
  public back:any
  public index:any
  @Input() override title:string=''
  public show_big_photo(photo:any,index:number){

      this.index=index

      if (this.data[index+1]){
        this.next=true
      }else{
        this.next=false
      }

      if (this.data[index-1]){
        this.back=true
      }else{
        this.back=false
      }

      this.photo=photo
      this.big_photo_url='http://127.0.0.1:8000/'+photo.url
  }

  public next_photo(){
    this.show_big_photo(this.data[this.index+1],this.index+1)
  }

  public back_photo(){
    this.show_big_photo(this.data[this.index-1],this.index-1)
  }
  
}
