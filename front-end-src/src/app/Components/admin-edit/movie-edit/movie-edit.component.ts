import { Component} from '@angular/core';
import { AbstractEditComponent } from '../abstract-edit/abstract-edit.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent extends AbstractEditComponent {
  override url='http://127.0.0.1:8000/movieupdata/'
  protected override auth:any=true
  Edit = new FormGroup({
    show_name: new FormControl(),
    country:new FormControl(),
    description: new FormControl(''),
    date_relesed: new FormControl(''),
    serie     :new FormControl(''),
    producent     :new FormControl(''),
  });

  protected override on_init():void {
    this.RelationSelectService.get_series()
    this.RelationSelectService.get_producent()
    this.RelationSelectService.get_tags()
    this.RelationSelectService.get_stars()
  }

  protected override on_get_result(data:any){
    this.Edit = new FormGroup({
      show_name: new FormControl(data.show_name),
      country:new FormControl(data.country),
      description: new FormControl(data.description),
      date_relesed: new FormControl(data.date_relesed),
      serie: new FormControl(data.serie)
    });
  }

  public save(){
    this.httpService.put_url(this.url+''+this.id+'/',this.Edit.value).subscribe(respanse=>{
      console.log(respanse)
    })
  }


}
