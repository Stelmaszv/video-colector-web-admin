import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {
  public data:any;
  protected url='';
  protected results : any;
  protected response : any;

  constructor(protected httpService: HttpService) { }

  public ngOnInit(): void {
    this.data=[]
    this.load_data()
    this.scroller()
  }

  protected on_set_results(movie:any):any{}

  protected load_data():void
  {
    this.httpService.get_url(this.url).subscribe(
      (response) => {
        if (response.hasOwnProperty('results')){
          this.response=response
          this.set_results()
        }
      }
    );
  }

  protected add_if_not_exist(data:any):boolean{
    let stan=true
    for (let item of this.data){
        if (item.id==data.id){
          stan = false
        }
    }
    return stan
  }

  private set_results():void{
    for (let movie of this.response.results){
      this.on_set_results(movie)
      if (this.add_if_not_exist(movie)){
        this.data.push(movie)
      }
    }
  }

  private set_next():string{
    if (this.response.next != null){
      return this.response.next
    }else{
      return this.url
    }
  }

  protected scroller():void
  {
    let obj=this
    window.addEventListener("scroll", (event) => {
      var limit = document.body.offsetHeight - window.innerHeight;
      let scrol_pos=90/100*limit
        if (window.scrollY>scrol_pos){
          if (obj.data.length < obj.response.count){
            obj.url = obj.set_next()
            obj.load_data()
          }
        }
    })
  }

}
