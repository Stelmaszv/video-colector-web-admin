import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-component',
  templateUrl: './start-component.component.html',
  styleUrls: ['./start-component.component.scss']
})
export class StartComponentComponent implements OnInit {

  public movies_url:string='api/top/movies?order='
  public series_url:string='api/top/series?order='
  public stars_url:string='api/top/stars?order='
  public producents_url:string='api/top/producents?order='

  ngOnInit(): void {
    console.log('wqdd')
  }

}
