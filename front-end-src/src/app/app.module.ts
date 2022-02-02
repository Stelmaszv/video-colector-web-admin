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
    MoviePhotosComponent
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

