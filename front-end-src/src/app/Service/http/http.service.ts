import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http:HttpClient) { }
  
  public get_url(url :string) {
    return this.http.get(url);
  }

  public post_url(url :string,data:any) {
    return this.http.post(url,data);
  }
}
