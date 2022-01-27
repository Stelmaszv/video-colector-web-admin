import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-start-component',
  templateUrl: './start-component.component.html',
  styleUrls: ['./start-component.component.scss']
})
export class StartComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('wqdd')
  }

}
