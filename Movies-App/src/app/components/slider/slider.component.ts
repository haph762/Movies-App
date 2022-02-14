import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images_sizes';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('sliderFade', [
      state('void', style({opacity: 0})), transition('void <=> *', [animate('500ms')])
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  currentSliderIndex: number = 0;
  readonly imagesSizes = IMAGES_SIZES
  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner){
      setInterval(() => {
        this.currentSliderIndex = ++this.currentSliderIndex % this.items.length;
      }, 5000);
    }
  }

}
