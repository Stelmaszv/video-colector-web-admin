import { Component, OnInit} from '@angular/core';
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
  public url:string=''
  public filter_url:string=""
  public tags_form:any
  public stars_form:any
  public loading:boolean=true
  public search:any
  public tags:any
  public stars:any
  public series_select:any
  private series_select_url:string = 'http://127.0.0.1:8000/series_select'
  private tag_select_url:string = 'http://127.0.0.1:8000/tags'
  private star_select_url:string = 'http://127.0.0.1:8000/stars_form'
  protected results : any;
  protected response : any;
  protected page:number=1 ;
  

  public constructor(protected httpService: HttpService) { }

  public add_star(add_star:number):void
  {
    this.array_filter(this.stars_form,add_star)
  }

  public add_tag(add_tag:number):void
  {
    this.array_filter(this.tags_form,add_tag)
  }

  public if_exist(id:number,array:any[]):boolean
  { 
    let stan=false
    for (let el of array){
      if (el==id){
        stan= true
      }
    }
    return stan
  }

  public load_items_for_form():void
  {
    this.httpService.get_url(this.tag_select_url).subscribe(
      (response) => {
          this.tags=response
      }
    );
    this.httpService.get_url(this.star_select_url).subscribe(
      (response) => {
          this.stars=response
      }
    );
  }

  public serch():void
  {
    this.page=1;
    this.data=[]
    this.set_form()
    this.load_data()
  }

  public ngOnInit(): void 
  {
    this.data=[]
    this.load_data()
    this.onInit()
    this.scroller()
  }

  public onInit():void
  {}

  private set_results():void{
    for (let movie of this.response.results){
      this.on_set_results(movie)
      if (this.add_if_not_exist(movie)){
        this.data.push(movie)
      }
    }
  }

  private set_next():number
  {
    if (this.response.next != null){
      return this.page+1
    }else{
      return this.page
    }
  }

  private set_form():void
  {
    let form_elments = Object.keys(this.search.value);
    this.filter_url=''
    for (let item of form_elments){
      if (this.search.value[item]!=null){
        let string =item+'='+this.search.value[item]
        this.filter_url+=string+'&'
      }

    }

    for (let star of this.stars_form){
      let string ='stars='+star
      this.filter_url+=string+'&'
    }

    for (let tag of this.tags_form){
      let string ='tags='+tag
      this.filter_url+=string+'&'
    }
  }

  private array_filter(array:any[],add:number):void
  {
    let stan=false
    for (let el of array){
      if (el==add){
        stan= true
      }
    }
    
    if (stan){
      array.splice(add)
    }else{
      array.push(add)
    }
  }

  protected load_select():void
  {
    this.httpService.get_url(this.series_select_url).subscribe(
      (response) => {
          this.series_select=response
      }
    );
  }

  protected on_set_results(movie:any):void
  {}

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

  protected add_if_not_exist(data:any):boolean
  {
    let stan=true
    for (let item of this.data){
        if (item.id==data.id){
          stan = false
        }
    }
    return stan
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
