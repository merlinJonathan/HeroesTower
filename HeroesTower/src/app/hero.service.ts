import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:8082/api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl + '/').pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }


  getHero(id: number): Observable<Hero> {
    const url = '' + this.heroesUrl + '/' + id;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log('fetched hero id=' + id)),
      catchError(this.handleError<Hero>('getHero id=' + id))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl + '/', hero, this.httpOptions).pipe(
      tap((hero1: Hero) => this.log('added hero w/ id=' + hero1.id)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl + '/', hero, this.httpOptions).pipe(
      tap((hero1: Hero) => this.log('updated hero id=' + hero1.id)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = '' + this.heroesUrl + '/' + id;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log('deleted hero id=' + id)),
      catchError(this.handleError('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = '' + this.heroesUrl + '/?name=' + term;

    return this.http.get<Hero[]>(url).pipe(
      tap(_ => this.log('found heroes matching "' + term + '"')),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('' + operation + ' failed: ' + error.message);
      return of(result as T);
    };
  }
}
