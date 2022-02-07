import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpService } from '../../../Service/http/http.service';
import {BaseIDComponent} from '../base-id/base-id.component'

@Component({
  selector: 'app-movieid',
  templateUrl: './movieid.component.html',
  styleUrls: ['./movieid.component.scss']
})
export class MovieidComponent extends BaseIDComponent{

  public mode='poster'
  override url='http://127.0.0.1:8000/movie/'

}
