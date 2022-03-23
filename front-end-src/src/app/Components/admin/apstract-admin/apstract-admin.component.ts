import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-apstract-admin',
  templateUrl: './apstract-admin.component.html',
  styleUrls: ['./apstract-admin.component.scss']
})
export class ApstractAdminComponent extends BaseListComponent  {

  protected item_url=''
  protected edit_url=''
  protected galery_url=''
  protected tag_url=''
  protected stats_url=''
  public delete_data:any
  public delete_name:string=''
  public delete_url:string= ''
  public delete_index:number= 0

  public set_delete(data:any,i:any){
    this.delete_data=data
    this.delete_name=data.name
    this.delete_index=i
  }

  public delete(){
    this.AlertService.alert(this.delete_name+' has been Deleted')
    this.data.splice(this.delete_index,1)
    this.httpService.delete(this.delete_url+'/'+this.delete_data.id).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

  protected override on_set_results(movie:any):void
  {
    movie['item_url']=[this.item_url+'/',movie.id]
    movie['edit_url']=['/admin/'+this.item_url+'/edit/',movie.id]
    movie['galery_url']=['/admin/'+this.item_url+'/galery/',movie.id]
    movie['tag_url']=['/admin/'+this.item_url+'/items/',movie.id]
    movie['stats_url']=['/admin/'+this.item_url+'/stats/',movie.id]
  }
}
