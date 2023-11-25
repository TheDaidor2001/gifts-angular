import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'gifts-search',
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Gifts..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private giftServices: GiftsService) {}

  // searchTag(newTag: string) {
  searchTag() {
    const newtag = this.tagInput.nativeElement.value;
    this.giftServices.searchTag(newtag);

    this.tagInput.nativeElement.value = '';
  }
}
