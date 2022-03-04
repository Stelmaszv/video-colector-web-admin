import { Component, Input} from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-admin-stars-items',
  templateUrl: './admin-stars-items.component.html',
  styleUrls: ['./admin-stars-items.component.scss']
})
export class AdminStarsItemsComponent extends BaseListComponent {

  public override url: string="http://127.0.0.1:8000/movie/stars/";
  public add_url: string="http://127.0.0.1:8000/movie/stars/";
  public remowe_url: string="http://127.0.0.1:8000/movie/stars/";
  protected override auth: any=true;
  public list :any[]=[]
  @Input() id=1

  public override on_before_load_data():void
  {
    this.RelationSelectService.get_stars()
    this.RelationSelectService.get_tags()
    this.url=this.url+this.id
  }

  protected override on_after_set_results(response:any){
    for (let el of response['results']){
      this.list.push(el)
    }
    let json={
      'stars':this.list
    }
    this.httpService.put_url('http://127.0.0.1:8000/movieupdata/1/',json).subscribe(
      response=>{
        console.log(response)
      }
    )
  }


  public add_item(star:any){
    if (!this.if_exist(star,this.list)){
      this.list.push(star)
    }
  }

  public item_remove(index:number){
    this.list.splice(index,1)
  }

  private set_data_to_send(){
    let data=[]
    for (let el of this.list){
      data.push(el['id'])
    }
    return data
  }
  
  public save(){
    let json={
      'stars':this.set_data_to_send()
    }
    this.httpService.put_url('http://127.0.0.1:8000/movieupdata/'+this.id+'/',json).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

  public if_exist_in_list(id:number):boolean
  { 
    let stan=false
    for (let el of this.list){
      if (el['id']==id){
        stan= true
      }
    }
    return stan
  }



}
