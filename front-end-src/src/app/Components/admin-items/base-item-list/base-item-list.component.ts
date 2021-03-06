import { Component, OnInit,Input } from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-base-item-list',
  templateUrl: './base-item-list.component.html',
  styleUrls: ['./base-item-list.component.scss']
})
export class BaseItemListComponent extends BaseListComponent {

  @Input() public override url: string="";
  @Input() public item_url = ""
  protected override auth: any=true;
  protected override no_title: boolean=true;
  public list :any[]=[]
  public div_id=""
  @Input() public add_section='' 
  @Input() id:any=0

  public override on_before_load_data():void
  {
    this.RelationSelectService.get_stars()
    this.RelationSelectService.get_tags()
    this.RelationSelectService.get_series()
    this.url=this.url+this.id
  }

  protected override on_after_set_results(response:any)
  {
    for (let el of response['results']){
      this.list.push(el)
    }
  }

  public add_item(star:any)
  {
    if (!this.if_exist(star,this.list)){
      this.list.push(star)
        this.httpService.get_url_auth(this.item_url+this.id+'/?add='+star['id']).subscribe(response=>{
          console.log(response)
        }
      )
    }
  }

  public item_remove(index:number,id:number)
  {
    this.list.splice(index,1)
    this.httpService.get_url_auth(this.item_url+this.id+'/?delete='+id).subscribe(response=>{
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
