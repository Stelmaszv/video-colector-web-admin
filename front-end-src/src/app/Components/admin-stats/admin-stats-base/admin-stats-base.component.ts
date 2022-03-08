import { Component,Input } from '@angular/core';
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
  @Input() public selector='';

  private update_elemnt(selector:string){
    function to_int(value:any):any{
      return value*1
    }
    let domEl: HTMLElement | null = document.querySelector(selector);
    domEl && (
      domEl.innerHTML =String(to_int(domEl.innerHTML)-1)
    );
  }

  public delete_el(index:number,id:number) {
    this.data.splice(index,1)
    this.update_elemnt(this.selector)
    this.httpService.delete(this.delete_url+id).subscribe(
      respanse=>{
        console.log(respanse)
      }
    )
  }
}
