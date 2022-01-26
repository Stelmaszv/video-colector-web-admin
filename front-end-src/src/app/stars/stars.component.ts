import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  url='http://127.0.0.1:8000/stars'
  data: any;
  results : any;
  movies : any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.data=[]
    this.load_data()
    this.scroller()
  }

  private set_more(movie:any){
    if (movie.stars.length>2){
      return movie.stars.length-2
    }
    return 0
  }

  
  private set_stars(movie:any){
    let better_stars=[]
    let resst=[]
    let count=0

    for (let star of movie.stars){
      if (star.views.length>0){
        better_stars.push(star)
      }
    }

    for (let star of movie.stars){
      if (star.views.length==0){
        resst.push(star)
        count++
      }
    }

    if (!better_stars.length){
      let reset1=resst[Math.floor(Math.random()* resst.length)]
      return better_stars.concat(reset1);
    }
    return better_stars;
  }

  private add_if_not_exist(movie:any):boolean{
    let stan=true
    for (let item of this.data){
        if (item.id==movie.id){
          stan = false
        }
    }
    return stan
  }

  private load_data():void{
    this.httpService.get_url(this.url).subscribe(
      (response) => {
        if (response.hasOwnProperty('results')){
          this.results=response
          this.set_results()
        }
      }
    );
  }

  private set_results():void{
    for (let movie of this.results.results){
      //movie['js_stars']=this.set_stars(movie)
      //movie['more']=this.set_more(movie)

      if (this.add_if_not_exist(movie)){
        this.data.push(movie)
      }
    }
  }

  private scroller(){
    let obj=this
    window.addEventListener("scroll", (event) => {
      var limit = document.body.offsetHeight - window.innerHeight;
      let scrol_pos=90/100*limit
        if (window.scrollY>scrol_pos){
          if (obj.data.length < obj.results.count){
            obj.url = obj.set_next()
            obj.load_data()
          }
        }
    });
  }

  private set_next():string{
    if (this.results.next != null){
      return this.results.next
    }else{
      return this.url
    }
  }
}
