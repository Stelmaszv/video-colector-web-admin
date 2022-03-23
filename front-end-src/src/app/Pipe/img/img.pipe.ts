import { Pipe, PipeTransform } from '@angular/core';
import { Varable } from 'src/app/varables';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  public transform(data: any,type:any): string {
    switch(type){
      case 'poster':
        return this.valid_img(data['poster'],Varable.no_poster)
      break;
      case 'star_avatar':
        return this.valid_img(data['avatar'],Varable.no_avatar_star)
      break;
      case 'avatar':
        return this.valid_img(data['avatar'],Varable.no_avatar_defult)
      break;
    }
    return ''  
  }

  private valid_img(img:string,return_str:string) : string{
    return(img) ? img :return_str;
  }


}
