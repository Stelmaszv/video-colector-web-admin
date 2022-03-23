import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producent-loop-component',
  templateUrl: './producent-loop-component.component.html',
  styleUrls: ['./producent-loop-component.component.scss']
})
export class ProducentLoopComponentComponent{
  @Input() public El:any
}
