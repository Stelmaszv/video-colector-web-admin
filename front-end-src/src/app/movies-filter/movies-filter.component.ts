import { Component, OnInit } from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component'

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.scss']
})
export class MoviesFilterComponent{

  url='http://127.0.0.1:8000/movies'

}
