import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  public transform(data:any): string {
    return this.valid_name(data);
  }

  private valid_name(data:any) : string{
    return(data.show_name) ? data.show_name : data.name;
  }

}
