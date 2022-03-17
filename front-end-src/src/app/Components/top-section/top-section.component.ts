import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseListComponent } from '../list/base-list/base-list.component';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})

export class TopSectionComponent extends BaseListComponent {
  @Input() public section_title:String=''
  @Input() public override url:any
  @Input() public order:String='-views_count'
  protected override paginate=false
  override debug =true
  
  public order_form = new FormControl();
  public override on_before_load_data(): void 
  {
    this.url=this.store_url+this.order  
  } 

  public set_order(): void 
  {
    this.data=[]
    this.url=this.store_url+this.order_form.value
    console.log(this.url)
    this.load_data()
  }
}
