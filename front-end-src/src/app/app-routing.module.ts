import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartComponentComponent } from './Components/start-component/start-component.component'
import {MovieidComponent}     from './Components/id/movieid/movieid.component'
import {ProducentIdComponent} from './Components/id/producent-id/producent-id.component'
import {SerieIdComponent} from './Components/id/serie-id/serie-id.component'
import {StarComponent} from './Components/id/star/star.component'
import {MianMoviesComponent} from './Components/main-components/mian-movies/mian-movies.component'
import {MianSeriesComponent} from './Components/main-components/mian-series/mian-series.component'
import {MainStarsComponent} from './Components/main-components/main-stars/main-stars.component'
import {MainProducentComponent} from './Components/main-components/main-producent/main-producent.component'
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { AuthGuard } from './Components/gard/auth.guard';
import { AdminMoviesComponent } from './Components/admin/admin-movies/admin-movies.component';
import { AdminProducentComponent } from './Components/admin/admin-producent/admin-producent.component';
import { AdminStarsComponent } from './Components/admin/admin-stars/admin-stars.component';
import { AdminSeriesComponent } from './Components/admin/admin-series/admin-series.component';
import { AdminTagsComponent } from './Components/admin/admin-tags/admin-tags.component';
import { AdminComponent } from './Components/admin/admin/admin.component';
import { MovieEditComponent } from './Components/admin-edit/movie-edit/movie-edit.component';
import { AdminMoviesGaleryComponent } from './Components/admin-galery/admin-movies-galery/admin-movies-galery.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'start',
    component: StartComponentComponent
  },
  {
    path: 'movies',
    component: MianMoviesComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/movies',
    component: AdminMoviesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/movie/edit/:id',
    component: MovieEditComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/movie/galery/:id',
    component: AdminMoviesGaleryComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/producents',
    component: AdminProducentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/stars',
    component: AdminStarsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/series',
    component: AdminSeriesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin/tags',
    component: AdminTagsComponent,
    canActivate:[AuthGuard]
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
    component: MainStarsComponent
  },
  {
    path: 'series',
    component: MianSeriesComponent
  },
  {
    path: 'producents',
    component: MainProducentComponent
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
