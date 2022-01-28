import { Component, OnInit ,Input} from '@angular/core';
import { HttpService } from '../http.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-base-list',
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '90px'
      })),
      state('closed', style({
        backgroundColor: 'black',
        top: '110px'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {
  public data:any;
  public url=''
  public filter_url=""
  protected results : any;
  protected response : any;
  protected page=1;
  loading:any=true

  constructor(protected httpService: HttpService) { }


  public ngOnInit(): void {
    this.data=[]
    this.load_data()
    this.onInit()
    this.scroller()
  }

  public onInit():void
  {

  }

  protected on_set_results(movie:any):any{}

  protected load_data():void
  {
    if (this.loading){
      this.loading=false
      console.log(this.url+this.page+'&'+this.filter_url)
      this.httpService.get_url(this.url+this.page+'&'+this.filter_url).subscribe(
        (response) => {
          if (response.hasOwnProperty('results')){
            this.response=response
            this.set_results()
            this.loading=true
          }
        }
      );
    }
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

  private set_next():number{
    if (this.response.next != null){
      return this.page+1
    }else{
      return this.page
    }
  }

  protected scroller():void
  {
    let obj=this
    window.addEventListener("scroll", (event) => {
      if (obj.loading){
        var limit = document.body.offsetHeight - window.innerHeight;
        let scrol_pos=90/100*limit
          if (window.scrollY>scrol_pos){
            if (obj.data.length < obj.response.count){
              obj.page = obj.set_next()
              obj.load_data()
            }
          }
      }
    })
  }

}
