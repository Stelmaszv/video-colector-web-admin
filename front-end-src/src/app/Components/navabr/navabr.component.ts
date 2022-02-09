import { Component, OnInit} from '@angular/core';
import { TokkenService } from 'src/app/Service/tokken/tokken.service';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrls: ['./navabr.component.scss']
})
export class NavabrComponent implements OnInit {

  public auth:any=false

  constructor(private TokkenService:TokkenService) { }
  public if_auth(){
    this.auth=this.TokkenService.if_isset_tokken()
  }

  ngOnInit(): void {
    this.if_auth()
  }

  
}
