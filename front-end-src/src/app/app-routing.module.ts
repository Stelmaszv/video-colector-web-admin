import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartComponentComponent } from './Components/start-component/start-component.component'
import { MoviesComponent } from './Components/movies-components/movies/movies.component'
import { StarsComponent } from './Components/list/stars/stars.component'
import { SeriesComponent } from './Components/list/series/series.component'
import { ProducentComponent } from './Components/list/producent/producent.component'
import {MovieidComponent}     from './Components/id/movieid/movieid.component'
import {ProducentIdComponent} from './Components/id/producent-id/producent-id.component'
import {SerieIdComponent} from './Components/id/serie-id/serie-id.component'
import {StarComponent} from './Components/id/star/star.component'
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
