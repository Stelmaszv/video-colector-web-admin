import { Component} from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'
import { FormControl ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent extends BaseListComponent{
  mode ='cover'
  series_select:any
  tags:any
  stars:any
  tags_form:any
  stars_form:any
  public override url='http://127.0.0.1:8000/movies?page='
  series_select_url = 'http://127.0.0.1:8000/series_select'
  tag_select_url = 'http://127.0.0.1:8000/tags'
  star_select_url = 'http://127.0.0.1:8000/stars_form'


  search = new FormGroup({
    name: new FormControl(),
    series: new FormControl(),
    likes_count: new FormControl(),
    avg_rating:  new FormControl(),
    ratings_count:new FormControl(),
    disLikes_count:new FormControl()
  });

  override onInit(){
      this.tags_form=[]
      this.stars_form=[]
      this.load_select()
  }

  add_if_not_exist_in_array(addtag:any):boolean{
      for (let tag of this.tags_form){
        if (tag==addtag){
          return true
        }
      }
      return false
  }
  private array_filter(array:any[],add:number){
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

  add_star(add_star:number){
    this.array_filter(this.stars_form,add_star)
  }

  add_tag(add_tag:number){
    this.array_filter(this.tags_form,add_tag)
  }

  load_select(){
    this.httpService.get_url(this.series_select_url).subscribe(
      (response) => {
          this.series_select=response
      }
    );
  }

  load_items_for_form():void
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

  change_mode(){
    if (this.mode=='cover'){
      this.mode='poster'
    }else if(this.mode=='poster'){
      this.mode='cover'
    }
  }

  set_form(){
    let form_elments = Object.keys(this.search.value);
    let count=0
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

  serch(){
    this.page=1;
    this.data=[]
    this.set_form()
    this.load_data()
  }

  private set_more(movie:any){
    if (movie.stars.length>2){
      return movie.stars.length-2
    }
    return 0
  }

  private set_better_stars(movie:any):any[]{
    let better_stars=[]
    for (let star of movie.stars){
      if (star.views.length>0){
        better_stars.push(star)
      }
    }
    return better_stars
  }

  private set_resst(movie:any):any[]{
    let resst=[]
    let count=0
    for (let star of movie.stars){
      if (star.views.length==0){
        resst.push(star)
        count++
      }
    }
    return resst
  }

  private set_stars(movie:any){
    let better_stars=this.set_better_stars(movie)
    let resst=this.set_resst(movie)

    if (!better_stars.length){
      let reset1=resst[Math.floor(Math.random()* resst.length)]
      return better_stars.concat(reset1);
    }
    return better_stars;
  }

  private set_star_for_poster(movie:any){
    let better_stars=this.set_better_stars(movie)
    let resst=this.set_resst(movie)

    let more=this.set_more(movie)
    if (more>7){
        let new_new=[]
        for (let i = 0; i < 3; i++) {
          let item=resst[Math.floor(Math.random()* resst.length)]
          if (this.add_if_not_exist(movie)){
            new_new.push(item)
          }
        }
        return better_stars.concat(new_new);
    }else{
      return better_stars.concat(resst);
    }
  }

  protected override on_set_results(movie:any):any
  {
    movie['js_stars']=this.set_stars(movie)
    movie['more']=this.set_more(movie)
    movie['js_stars_poster']=this.set_star_for_poster(movie)    
  }
}
