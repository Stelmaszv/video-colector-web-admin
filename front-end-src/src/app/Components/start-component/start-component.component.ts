import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-component',
  templateUrl: './start-component.component.html',
  styleUrls: ['./start-component.component.scss']
})
export class StartComponentComponent implements OnInit {

  public movies_url:string='http://127.0.0.1:8000/top/movies?order=-views_count'

  ngOnInit(): void {
    console.log('wqdd')
  }

}
