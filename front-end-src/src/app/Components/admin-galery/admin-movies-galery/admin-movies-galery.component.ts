import { Component, OnInit } from '@angular/core';
import { BaseGaleryComponent } from '../base-galery/base-galery.component';
import { HttpService } from 'src/app/Service/http/http.service';

@Component({
  selector: 'app-admin-movies-galery',
  templateUrl: './admin-movies-galery.component.html',
  styleUrls: ['./admin-movies-galery.component.scss']
})
export class AdminMoviesGaleryComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
 
  }

}
