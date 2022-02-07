import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLenght'
})
export class StringLenghtPipe implements PipeTransform {
  limit=150

  private short_string(string:string): string{
    let str=''
    for (let i = 0; i < string.length; i++) {
      if (i<this.limit){
        str=str+string[i]
      }
    }
    str=str+'...'
    return str

  }

  public transform(string:string): string {
    if (string.length>this.limit){
      return this.short_string(string)
    }
    return string;
  }

}
