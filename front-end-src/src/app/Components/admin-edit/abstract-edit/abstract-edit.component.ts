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
    /*
    console.log(this.url+''+this.id+'/')
    console.log(this.Edit.value)
    this.httpService.put_url(this.url+''+this.id+'/',this.Edit.value).subscribe(respanse=>{
      alert(respanse)
    })
    */
    //let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.httpService.http.put(this.url+''+this.id+'/',this.Edit.value).subscribe(respanse=>{
      console.log(respanse)
    })
  }

}
