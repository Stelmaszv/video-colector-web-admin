import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-series-loop-content',
  templateUrl: './series-loop-content.component.html',
  styleUrls: ['./series-loop-content.component.scss']
})
export class SeriesLoopContentComponent {
  @Input() public El:any
}
