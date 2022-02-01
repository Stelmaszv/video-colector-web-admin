import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartComponentComponent } from './start-component/start-component.component'
import { MoviesComponent } from './movies/movies.component'
import { StarsComponent } from './stars/stars.component'
import { SeriesComponent } from './series/series.component'
import { ProducentComponent } from './producent/producent.component'
import {MovieidComponent}     from './movieid/movieid.component'
import {ProducentIdComponent} from './producent-id/producent-id.component'
import {SerieIdComponent} from './serie-id/serie-id.component'
import {StarComponent} from './star/star.component'
const routes: Routes = [
  {
    path: '',
    component: StartComponentComponent
  },
  {
  path: 'start',
  component: StartComponentComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieidComponent
  },
  {
    path: 'producent/:id',
    component: ProducentIdComponent
  },
  {
    path: 'serie/:id',
    component: SerieIdComponent
  },

  {
    path: 'star/:id',
    component: StarComponent
  },  
  {
    path: 'stars',
    component: StarsComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'producents',
    component: ProducentComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
