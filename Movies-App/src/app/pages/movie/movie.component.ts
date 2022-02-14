import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images_sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  movieDetail: Movie = {} as Movie;
  imagesSizes = IMAGES_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService, 
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getDetail(id);
    });
  }
  ngOnDestroy(): void {
    console.log('ng ondestroy');
  }
  getDetail(id: string){
    this.moviesService.getDetail(id).subscribe(res =>{
      this.movieDetail = res;
    });
    this.getDetailMovies(id);
    this.getDetailImages(id);
    this.getDetailCredits(id);
  }
  getDetailMovies(id: string){
    this.moviesService.getMovieVideos(id).subscribe(res =>{
      this.movieVideos = res;
    });
  }
  getDetailImages(id: string){
    this.moviesService.getMovieImgs(id).subscribe(res =>{
      this.movieImages = res;
    });
  }
  getDetailCredits(id: string){
    this.moviesService.getMovieCredits(id).subscribe(res =>{
      this.movieCredits = res;
    });
  }

}
