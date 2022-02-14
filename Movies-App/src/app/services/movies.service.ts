import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'fcaec7a0848972240935ec9d12cb8ed1';
  constructor(
    private http: HttpClient,
  ) { }
  getMovies(typeMovie: string = 'upcoming', count: number = 12){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${typeMovie}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      }));
  }
  searchMovie(page: number){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`)
      .pipe(switchMap(res => {
        return of(res.results);
      }));
  }
  getTVs(typeLatest: string = 'latest', count: number = 12){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${typeLatest}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      }));
  }
  getDetail(id: string){
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res);
      }));
  }
  getMovieVideos(id: string){
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results);
      }));
  }
  getMovieImgs(id: string){
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res);
      }));
  }
  getMovieCredits(id: string){
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res);
      }));
  }
}
