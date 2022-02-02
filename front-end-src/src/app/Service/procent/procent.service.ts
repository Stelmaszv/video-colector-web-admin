import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcentService {

  public bad_procent(movie:any){
    let all_liks=movie.likes_count+movie.disLikes_count
    return String(movie.disLikes_count*100/all_liks)+'%'
  }

  public good_procent(movie:any){
    let all_liks=movie.likes_count+movie.disLikes_count
    return String(movie.likes_count*100/all_liks)+'%'
  }
  
}
