import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

interface CharacterResponse {
  info: any;
  results: never[];
}

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private http = inject(HttpClient)
  private url = 'https://rickandmortyapi.com/api';
  private exampleSubject = new BehaviorSubject([]);
  example$ = this.exampleSubject.asObservable();

  getCharacters() {
    return this.http.get<CharacterResponse>(`${this.url}/character`)
      .pipe(
        tap(characters => this.exampleSubject.next(characters.results)),
        catchError(error => {
          console.error(error)
          return throwError(() => new Error('An error occurred'))
        })
      );
  }
}