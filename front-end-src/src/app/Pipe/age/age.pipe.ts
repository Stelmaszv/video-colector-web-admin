import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  public transform(data: any): string 
  {
    return data.date_of_birth+', Age - '+this.get_age(data.date_of_birth)+' years old';
  }

  private get_age(data: any):number
  {
    var birthdate = Number(new Date(data));
    var cur = Number(new Date());
    var diff = cur-birthdate;
    var age = Math.floor(diff/31557600000);
    return age
  }

}
