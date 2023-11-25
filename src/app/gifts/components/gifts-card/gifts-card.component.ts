import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifts-card',
  templateUrl: './gifts-card.component.html',
})
export class GiftsCardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (this.gif === undefined) throw new Error('Gift property es required');
  }
}
