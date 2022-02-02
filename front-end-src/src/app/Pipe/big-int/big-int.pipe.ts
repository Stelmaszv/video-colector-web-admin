import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigInt'
})
export class BigIntPipe implements PipeTransform {

  public transform(int:number): string {
    let k=Math.round(int / 1000)
    let m=Math.round(int / 100000000)

    if (k>0 && m==0){
      return k+' K';
    }

    if (m>0){
      return m+' M';
    }

    return String(int)
  }

}
