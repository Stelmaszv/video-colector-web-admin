import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-movies-serch-form',
  templateUrl: './movies-serch-form.component.html',
  styleUrls: ['./movies-serch-form.component.scss']
})
export class MoviesSerchFormComponent implements OnInit {
  @Input() public data:any

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
