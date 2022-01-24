import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies : any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get_url('http://127.0.0.1:8000/movies')
    
    
    .subscribe(

      (response) => {
        console.log(this.movies=response)
      }
    );
  }

}
