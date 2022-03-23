import { Pipe, PipeTransform } from '@angular/core';
import { Varable } from 'src/app/varables';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(data: any): string {
    return (data['description']) ? data['description'] : Varable.desc_defult;
  }

}
