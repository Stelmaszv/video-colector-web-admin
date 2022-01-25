import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  get_url(url :string) {
    return this.http.get(url);
  }
}
