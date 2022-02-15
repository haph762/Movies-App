import { Component, OnInit } from '@angular/core';
import { Genres } from 'src/app/models/genres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: Genres[] = [];
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.getMovieGenres().subscribe(res =>{
      this.genres = res;
    });
  }
}
