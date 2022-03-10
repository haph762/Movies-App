import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  
  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string = '';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private spinnerService: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.route.params.pipe(take(1)).subscribe(({genreId}) => {
      if(genreId){
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      }else{
        this.searchMovies(1, this.searchValue);
      }
    });
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500);
  }

  searchMovies(page: number, searchValue?: string){
    this.spinnerService.show();
    this.moviesService.searchMovie(page, searchValue).subscribe((movies) => {
      this.movies = movies;
    });
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500);
  }
  paginate(event: any) {
    const pageNumber = event.page +1;
    if(this.genreId){
      this.getMoviesByGenre(this.genreId, pageNumber);
    }else{
      if(this.searchValue){
        this.searchMovies(pageNumber, this.searchValue);
      }else{
        this.searchMovies(pageNumber);
      }
    }
  }
  //get genres
  getMoviesByGenre(genreId: string, page: number){
    this.moviesService.getMovieByGenres(genreId,page).subscribe((movies) =>{
      this.movies = movies;
    });
  }
  //search
  searchChange(){
    this.searchMovies(1, this.searchValue);
  }
}
