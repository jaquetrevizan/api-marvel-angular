import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = 'ed5accb8c7697714ac1dbf1c7584c3c0'
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=${this.PUBLIC_KEY}`

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data.data.results))
  }
}
