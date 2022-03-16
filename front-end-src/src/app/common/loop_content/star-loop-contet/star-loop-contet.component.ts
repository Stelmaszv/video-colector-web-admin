import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-star-loop-contet',
  templateUrl: './star-loop-contet.component.html',
  styleUrls: ['./star-loop-contet.component.scss']
})
export class StarLoopContetComponent{
  @Input() public El:any
}
