import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
api: string = environment.apiUrl;
  constructor(public http: HttpClient) { 
    console.log(this.api);
  }

 public getData(){
    return this.http.get(this.api+'entries');
 }

  public mahadev(){
    return 'developer';
  }

}
