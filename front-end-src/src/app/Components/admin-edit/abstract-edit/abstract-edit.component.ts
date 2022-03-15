import { Component} from '@angular/core';
import { BaseIDComponent } from '../../id/base-id/base-id.component';
@Component({
  selector: 'app-abstract-edit',
  templateUrl: './abstract-edit.component.html',
  styleUrls: ['./abstract-edit.component.scss']
})
export class AbstractEditComponent extends BaseIDComponent {

  public Edit:any

  protected override on_init():void {
    this.RelationSelectService.get_series()
    this.RelationSelectService.get_producent()
    this.RelationSelectService.get_tags()
    this.RelationSelectService.get_stars()
  }

  public save(){
    this.httpService.put_url(this.url+''+this.id+'/',this.Edit.value).subscribe(respanse=>{
      console.log(respanse)
    })
  }

  protected override set_title(response: any): string {
    return 'Edit '+response['name']
  }

}
