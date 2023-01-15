import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = environment.base_url;
  constructor(private http: HttpClient) {

}

public getPokemon(route: string):Observable<any>{
  const url_api = this.url+route;
  return this.http.get<any[]>(url_api).pipe(
    map( (resp: any) => {
    return resp;
    } ),
    catchError(this.handleError<any>())
    );

 }

 public getDetail(route: string):Observable<any>{
  const url_api =  this.url+route;
  return this.http.get<any[]>(url_api).pipe(
    map( (resp: any) => {
    return resp;
    } ),
    catchError(this.handleError<any>())
    );

 }

 private handleError<T>(result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
};
}

}
