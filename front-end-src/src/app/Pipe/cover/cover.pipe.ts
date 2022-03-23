import { Pipe, PipeTransform } from '@angular/core';
import { Varable } from 'src/app/varables';

@Pipe({
  name: 'cover'
})

export class CoverPipe implements PipeTransform {

  public transform(data: any,type:any): string {
    console.log(type)
    return this.valid_img(data['poster'])
  }

  private valid_img(poster:string) : string{
    return(poster) ? poster :Varable.no_poster;
  }

}
