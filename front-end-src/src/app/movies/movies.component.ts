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
  public override url='http://127.0.0.1:8000/movies?page='

  search = new FormGroup({
    name: new FormControl(),
  });

  change_mode(){
    if (this.mode=='cover'){
      this.mode='poster'
    }else if(this.mode=='poster'){
      this.mode='cover'
    }
  }

  serch(){
    this.page=1;
    this.data=[]
    this.filter_url='name='+this.search.value.name
    this.load_data()
    console.log(this.url)
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
