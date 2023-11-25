import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { Gif } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifts-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private giftsService: GiftsService) {}

  get gifts(): Gif[] {
    return this.giftsService.giftsList;
  }
}
