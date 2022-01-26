import {Component} from '@angular/core';
import {BaseFilterComponent} from '../base-filter/base-filter.component'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.scss']
})
export class MoviesFilterComponent extends BaseFilterComponent{
  public override url='http://127.0.0.1:8000/movies?'
  name = new FormControl('');

  serch(){
    this.url+='?name=Mandy'
    console.log(this.url)
  }
}
