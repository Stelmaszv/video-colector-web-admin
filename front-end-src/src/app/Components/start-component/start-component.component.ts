import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-component',
  templateUrl: './start-component.component.html',
  styleUrls: ['./start-component.component.scss']
})
export class StartComponentComponent implements OnInit {

  public movies_url:string='http://127.0.0.1:8000/top/movies?order='
  public series_url:string='http://127.0.0.1:8000/top/series?order='
  public stars_url:string='http://127.0.0.1:8000/top/stars?order='
  public producents_url:string='http://127.0.0.1:8000/top/producents?order='

  ngOnInit(): void {
    console.log('wqdd')
  }

}
