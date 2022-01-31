import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movieid',
  templateUrl: './movieid.component.html',
  styleUrls: ['./movieid.component.scss']
})
export class MovieidComponent implements OnInit{

  protected id:any;
  protected url='http://127.0.0.1:8000/movie/';
  public data:any
  public mode='poster'
  ngAfterViewInit:any

  constructor(private activatedRoute: ActivatedRoute,protected httpService: HttpService) { }

  public ngOnInit(): void 
  {
    this.set_id()
    this.get_url(this.id)
  }

  private set_id(): void  
  {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  private get_url(id:number): void 
  {
    this.httpService.get_url(this.url+''+id+'').subscribe(
      (response) => {
          this.data=response
      }
    );
  }

}
