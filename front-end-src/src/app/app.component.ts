import { Component , OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newTitle= 'Video Collector Web Admin'
  public constructor(private titleService: Title) { }
  public ngOnInit() {
    this.titleService.setTitle(this.newTitle);
  }
}
