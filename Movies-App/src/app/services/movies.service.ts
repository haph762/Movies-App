import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '?api_key=fcaec7a0848972240935ec9d12cb8ed1';
  constructor(
    private http: HttpClient,
  ) { }
  getMovies(typeMovie: string = 'upcoming', count: number = 12){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${typeMovie}${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      }));
  }
}
