import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private rating(rate:any,ifs:boolean){
    if (0 < parseInt(rate)){
      if (ifs){
        return true
      }
      return false
    }else{
      return false
    }
  }

  public if_good_rating(movie:any){
    let rate = parseInt(movie.avg_rating)
    return this.rating(rate,rate > 3)
  }

  public if_mid_rating(movie:any){
    let rate = parseInt(movie.avg_rating)
    return this.rating(rate,rate == 3)
  }

  public if_low_rating(movie:any){
    let rate = parseInt(movie.avg_rating)
    return this.rating(rate,rate > 3)
  }
}
