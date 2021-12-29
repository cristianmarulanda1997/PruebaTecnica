import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url='https://api.openweathermap.org/data/2.5/weather?&appid='
   key='c661144c3ec11e790680f600acc9e8a9'
  constructor(private http:HttpClient) { }

  getclima(ciudad:string):Observable<any>{
    const URL=this.url+this.key+'&q='+ciudad
     return this.http.get(URL)
  }
}
