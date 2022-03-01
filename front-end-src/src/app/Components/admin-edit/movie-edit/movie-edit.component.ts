import { Component, OnInit } from '@angular/core';
import { AbstractEditComponent } from '../abstract-edit/abstract-edit.component';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent extends AbstractEditComponent {
  override url='http://127.0.0.1:8000/movieupdata/'
  protected override auth:any=true
}
