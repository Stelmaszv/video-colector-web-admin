import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartComponentComponent } from './start-component/start-component.component'
import { MoviesComponent } from './movies/movies.component'
import { StarsComponent } from './stars/stars.component'
import { SeriesComponent } from './series/series.component'
import { ProducentComponent } from './producent/producent.component'
import {MovieidComponent}     from './movieid/movieid.component'
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
