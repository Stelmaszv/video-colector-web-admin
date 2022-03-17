import { Pipe, PipeTransform } from '@angular/core';
import { DescPipe } from '../desc-pip/desc.pipe';
import { StringLenghtPipe } from '../string-lenght/string-lenght.pipe';

@Pipe({
  name: 'fullDesc'
})
export class FullDescPipe implements PipeTransform {

  transform(desc: any,limit:number) {
    return new StringLenghtPipe().transform(new DescPipe().transform(desc),limit)
  }

}
