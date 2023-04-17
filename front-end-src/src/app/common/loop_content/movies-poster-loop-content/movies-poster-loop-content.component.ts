import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movies-poster-loop-content',
  templateUrl: './movies-poster-loop-content.component.html',
  styleUrls: ['./movies-poster-loop-content.component.scss']
})
export class MoviesPosterLoopContentComponent {
  @Input() public El:any
}
