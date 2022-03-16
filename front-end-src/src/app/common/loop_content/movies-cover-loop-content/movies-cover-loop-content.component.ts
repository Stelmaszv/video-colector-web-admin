import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/Service/ratting/rating.service';

@Component({
  selector: 'app-movies-cover-loop-content',
  templateUrl: './movies-cover-loop-content.component.html',
  styleUrls: ['./movies-cover-loop-content.component.scss']
})
export class MoviesCoverLoopContentComponent{
  constructor(public RatingService:RatingService){}
  
  @Input() public El:any
}
