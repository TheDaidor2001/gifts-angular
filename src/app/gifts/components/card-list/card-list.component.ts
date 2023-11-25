import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifts-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  constructor() {}

  @Input()
  public gifts: Gif[] = [];
}
