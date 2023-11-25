import { Component } from '@angular/core';
import { GiftsService } from '../../../gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private giftsServices: GiftsService) {}

  get tags(): string[] {
    return this.giftsServices.tagsHistory;
  }

  searchTag(tag: string): void {
    this.giftsServices.searchTag(tag);
  }
}
