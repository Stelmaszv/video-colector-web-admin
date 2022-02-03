import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-star-movies',
  templateUrl: './star-movies.component.html',
  styleUrls: ['./star-movies.component.scss']
})
export class StarMoviesComponent implements OnInit {
  @Input() ID:any=0
  constructor() { }

  ngOnInit(): void {
  }

}
