import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule} from './/app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavabrComponent } from './Components/navabr/navabr.component';
import { MoviesComponent } from './Components/movies-components/movies/movies.component';
import { StartComponentComponent } from './Components/start-component/start-component.component';
import { SeriesComponent } from './Components/list/series/series.component';
import { StarsComponent } from './Components/list/stars/stars.component';
import { ProducentComponent } from './Components/list/producent/producent.component';
import { StringLenghtPipe } from './Pipe/string-lenght/string-lenght.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieidComponent } from './Components/id/movieid/movieid.component';
import { BigIntPipe } from './Pipe/big-int/big-int.pipe';
import { ProducentIdComponent } from './Components/id/producent-id/producent-id.component';
import { SerieIdComponent } from './Components/id/serie-id/serie-id.component';
import { StarComponent } from './Components/id/star/star.component';
import { SerieMoviesComponent } from './Components/movies-components/serie-movies/serie-movies.component';
import { MoviesWithStarsComponent } from './Components/movies-components/movies-with-stars/movies-with-stars.component';
import { BasePhotosComponent } from './Components/photos/base-photos/base-photos.component';
import { MoviePhotosComponent } from './Components/photos/movie-photos/movie-photos.component';
import { BaseIDComponent } from './Components/id/base-id/base-id.component';
import { SeriePhotosComponent } from './Components/photos/serie-photos/serie-photos.component';
import { SeriesStarsComponent } from './Components/stars-components/series-stars/series-stars.component';
import { StarMoviesComponent } from './Components/movies-components/star-movies/star-movies.component';
import { StarPhotoComponent } from './Components/photos/star-photo/star-photo.component';
import { ProducentPhotsComponent } from './Components/photos/producent-phots/producent-phots.component';
import { ProducentMoviesComponent } from './Components/movies-components/producent-movies/producent-movies.component';
import { ProducentStarsComponent } from './Components/stars-components/producent-stars/producent-stars.component';
import { ProducentSeriesComponent } from './Components/list/producent-series/producent-series.component';
import { MianMoviesComponent } from './Components/main-components/mian-movies/mian-movies.component';
import { MianSeriesComponent } from './Components/main-components/mian-series/mian-series.component';
import { MainStarsComponent } from './Components/main-components/main-stars/main-stars.component';
import { MainProducentComponent } from './Components/main-components/main-producent/main-producent.component';
import { LoginComponent } from './Components/login/login.component';
import { MainAuthComponent } from './Components/admin/main-auth/main-auth.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ActionsComponent } from './common/actions/actions.component';
import { ApstractAdminList } from './Components/admin/admin-movies/admin-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    NavabrComponent,
    MoviesComponent,
    StartComponentComponent,
    SeriesComponent,
    StarsComponent,
    ProducentComponent,
    StringLenghtPipe,
    MovieidComponent,
    BigIntPipe,
    ProducentIdComponent,
    SerieIdComponent,
    StarComponent,
    SerieMoviesComponent,
    MoviesWithStarsComponent,
    BasePhotosComponent,
    MoviePhotosComponent,
    BaseIDComponent,
    SeriePhotosComponent,
    SeriesStarsComponent,
    StarMoviesComponent,
    StarPhotoComponent,
    ProducentPhotsComponent,
    ProducentMoviesComponent,
    ProducentStarsComponent,
    ProducentSeriesComponent,
    MianMoviesComponent,
    MianSeriesComponent,
    MainStarsComponent,
    MainProducentComponent,
    LoginComponent,
    ApstractAdminList,
    MainAuthComponent,
    LogoutComponent,
    ActionsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

