import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images_sizes';
import { Movie } from '../../models/movie';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemData: Movie = {} as Movie;
  imagesSizes = IMAGES_SIZES
  constructor() { }

  ngOnInit(): void {
  }

}
