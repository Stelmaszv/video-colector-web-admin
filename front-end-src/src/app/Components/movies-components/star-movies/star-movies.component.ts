
import { Component, Input, OnInit } from '@angular/core';
import {MoviesComponent} from '../movies/movies.component'

@Component({
  selector: 'app-star-movies',
  templateUrl: '../movies/movies.component.html',
  styleUrls: ['../movies/movies.component.scss']
})
export class StarMoviesComponent extends MoviesComponent {
  @Input() ID:any=0
  @Input() override title:string=''
  start=true
  protected override debug: any=true;

  public override on_set_url():void
  {
    this.url = 'api/starsmovie/'+this.ID+'?page='+this.page+'&'+this.filter_url
  }
}