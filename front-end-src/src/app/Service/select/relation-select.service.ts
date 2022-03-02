import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RelationSelectService {

  constructor(protected httpService: HttpService) { }
  private producents_select_url:string = 'http://127.0.0.1:8000/producentsformview'
  private series_select_url:string = 'http://127.0.0.1:8000/series_select'
  private star_select_url:string = 'http://127.0.0.1:8000/stars_form'
  private tag_select_url:string = 'http://127.0.0.1:8000/tags'
  public tags:any
  public stars:any
  public series_select:any
  public producents_select:any

  public get_producent(){
    this.httpService.get_url(this.producents_select_url).subscribe(
      (response) => {
          this.producents_select=response
      }
    );
  }

  public get_series(){
    this.httpService.get_url(this.series_select_url).subscribe(
      (response) => {
          this.series_select=response
      }
    );
  }

  public get_stars(){
    this.httpService.get_url(this.star_select_url).subscribe(
      (response) => {
          this.stars=response
      }
    );
  }

  public get_tags(){
    this.httpService.get_url(this.tag_select_url).subscribe(
      (response) => {
          this.tags=response
      }
    );
  }
}

