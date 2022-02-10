import { Component,Input} from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { HttpService } from 'src/app/Service/http/http.service';
import { TokkenService } from 'src/app/Service/tokken/tokken.service';
@Component({
  selector: 'app-model-rate',
  templateUrl: './model-rate.component.html',
  styleUrls: ['./model-rate.component.scss']
})
export class ModelRateComponent{
  @Input() list:any
  constructor(protected httpService: HttpService,protected TokkenService: TokkenService) { }

  public addrate = new FormGroup({
    rate: new FormControl(1)
  });

  public add_to_rating():void
  {
    if(this.TokkenService.if_isset_tokken()){
      this.httpService.get_url_auth(this.list).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          if (error.statusText == 'Unauthorized'){
            localStorage.removeItem('tokkenAccess');
            localStorage.removeItem('tokkenRefresh');
            window.location.reload();
          }
        }
      );
    }
  }

}
