import { Component, OnInit,Input } from '@angular/core';
import { BaseListComponent } from '../../list/base-list/base-list.component';

@Component({
  selector: 'app-admin-stats-base',
  templateUrl: './admin-stats-base.component.html',
  styleUrls: ['./admin-stats-base.component.scss']
})
export class AdminStatsBaseComponent extends BaseListComponent {
  
  protected override  auth=true
  @Input() public override url='';
  @Input() public rateing='';
  @Input() public delete_url='';

  public delete_el(index:number,id:number) {
    this.data.splice(index,1)
    this.httpService.delete(this.delete_url+id).subscribe(
      respanse=>{
        console.log(respanse)
      }
    )
  }
}
