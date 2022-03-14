import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLenght'
})
export class StringLenghtPipe implements PipeTransform {
  limit=150

  private short_string(string:string,limit:number): string{
    let str=''
    for (let i = 0; i < string.length; i++) {
      if (i<limit){
        str=str+string[i]
      }
    }
    str=str+'...'
    return str

  }

  public transform(string:string,limit:number): string {
    if (string.length>limit){
      return this.short_string(string,limit)
    }
    return string;
  }

}
