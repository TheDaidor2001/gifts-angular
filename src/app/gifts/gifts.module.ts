import { CardListComponent } from './components/card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { GiftsCardComponent } from './components/gifts-card/gifts-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    CardListComponent,
    GiftsCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GiftsModule {}
