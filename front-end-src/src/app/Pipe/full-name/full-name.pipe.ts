import { Pipe, PipeTransform } from '@angular/core';
import { NamePipe } from '../name/name.pipe';
import { StringLenghtPipe } from '../string-lenght/string-lenght.pipe';

@Pipe({
  name: 'fullName'
})

export class FullNamePipe implements PipeTransform {

  transform(data: any,limit:number): unknown {
    return new StringLenghtPipe().transform(new NamePipe().transform(data),limit);
  }

}
