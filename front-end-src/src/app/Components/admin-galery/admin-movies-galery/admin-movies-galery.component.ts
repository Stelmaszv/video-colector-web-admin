import { Component, OnInit } from '@angular/core';
import { BaseGaleryComponent } from '../base-galery/base-galery.component';
import { HttpService } from 'src/app/Service/http/http.service';

@Component({
  selector: 'app-admin-movies-galery',
  templateUrl: './admin-movies-galery.component.html',
  styleUrls: ['./admin-movies-galery.component.scss']
})
export class AdminMoviesGaleryComponent implements OnInit {
  cover='http://127.0.0.1:8000/web\\Movies\\series\\I-L\\James Bond 007\\1\\1962 - Dr No\\cover.jpg'
  poster='http://127.0.0.1:8000/web\\Movies\\series\\I-L\\James Bond 007\\1\\1962 - Dr No\\poster.jpg'
  constructor() {

  }

  ngOnInit(): void {
 
  }

}
