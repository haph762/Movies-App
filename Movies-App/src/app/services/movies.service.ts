import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) { }
  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=fcaec7a0848972240935ec9d12cb8ed1');
  }
}
