import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationality'
})
export class NationalityPipe implements PipeTransform {

  private nationality_stan:string=''
  private birth_place:string=''

  public transform(data: any): string {
    this.nationality_stan = this.stan(data.nationality)
    this.birth_place = this.stan(data.birth_place)
    return (this.birth_place=='' && this.nationality_stan=='') ? 'Both Unknown':this.return_stan()
  }
  private stan(nationality:string){
    return (nationality) ? nationality:''
  }
  private return_stan():string{
    if (this.nationality_stan=='' && this.birth_place){
      return 'Nationality is Unknown, '+this.birth_place
    }
    if (this.birth_place=='' && this.nationality_stan){
      return this.nationality_stan+' Birth plac is Unknown'
    }
    if (this.birth_place && this.nationality_stan){
      return this.nationality_stan+' ('+this.birth_place+')';
    }
    return ''
  }

}
