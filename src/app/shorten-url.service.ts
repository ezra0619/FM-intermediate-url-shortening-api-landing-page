import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShortenURLService {

  constructor(private http: HttpClient){}

  shortenUrl(longUrl: string){
      return this.http.get(
          'https://tinyurl.com/api-create.php?url=' + longUrl,
          {responseType: 'text'}
      )
  }
}
