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
import { LogoutComponent } from './Components/logout/logout.component';
import { ActionsComponent } from './common/actions/actions.component';
import { AdminMoviesComponent } from './Components/admin/admin-movies/admin-movies.component';
import { ApstractAdminComponent } from './Components/admin/apstract-admin/apstract-admin.component';
import { AdminNavbarComponent } from './Components/admin/admin-navbar/admin-navbar.component';
import { AdminProducentComponent } from './Components/admin/admin-producent/admin-producent.component';
import { AdminStarsComponent } from './Components/admin/admin-stars/admin-stars.component';
import { AdminSeriesComponent } from './Components/admin/admin-series/admin-series.component';
import { AdminTagsComponent } from './Components/admin/admin-tags/admin-tags.component';
import { AdminComponent } from './Components/admin/admin/admin.component';
import { MovieEditComponent } from './Components/admin-edit/movie-edit/movie-edit.component';
import { AbstractEditComponent } from './Components/admin-edit/abstract-edit/abstract-edit.component';
import { BaseGaleryComponent } from './Components/admin-galery/base-galery/base-galery.component';
import { AdminMoviesGaleryComponent } from './Components/admin-galery/admin-movies-galery/admin-movies-galery.component';
import { AbstractAdminNavbarComponent } from './Components/admin-navbar/abstract-admin-navbar/abstract-admin-navbar.component';
import { MoviesAdminNavbarComponent } from './Components/admin-navbar/movies-admin-navbar/movies-admin-navbar.component';
import { AdminItemsMoviesComponent } from './Components/admin-items/admin-items-movies/admin-items-movies.component';
import { AdminMoviesStatsComponent } from './Components/admin-stats/admin-movies-stats/admin-movies-stats.component';
import { AdminStatsBaseComponent } from './Components/admin-stats/admin-stats-base/admin-stats-base.component';
import { SerieEditComponent } from './Components/admin-edit/serie-edit/serie-edit.component';
import { StarsEditComponent } from './Components/admin-edit/stars-edit/stars-edit.component';
import { ProducentEditComponent } from './Components/admin-edit/producent-edit/producent-edit.component';
import { AdminSeriesGaleryComponent } from './Components/admin-galery/admin-series-galery/admin-series-galery.component';
import { StarsAdminGaleryComponent } from './Components/admin-galery/stars-admin-galery/stars-admin-galery.component';
import { ProducentAdminGaleryComponent } from './Components/admin-galery/producent-admin-galery/producent-admin-galery.component';
import { BaseStatsComponentIDComponent } from './Components/admin-stats/base-stats-component-id/base-stats-component-id.component';
import { AdminSeriesStatasComponent } from './Components/admin-stats/admin-series-statas/admin-series-statas.component';
import { AdminStarsStatasComponent } from './Components/admin-stats/admin-stars-statas/admin-stars-statas.component';
import { BaseGaleryAdminComponent } from './Components/admin-galery/base-galery-admin/base-galery-admin.component';
import { AdminProducenrStatsComponent } from './Components/admin-stats/admin-producenr-stats/admin-producenr-stats.component';
import { BaseItemListComponent } from './Components/admin-items/base-item-list/base-item-list.component';
import { BaseItemsSectionsComponent } from './Components/admin-items/base-items-sections/base-items-sections.component';
import { AdminItemsSeriesComponent } from './Components/admin-items/admin-items-series/admin-items-series.component';
import { AdminItemsStarsComponent } from './Components/admin-items/admin-items-stars/admin-items-stars.component';
import { AdminItemsProducentComponent } from './Components/admin-items/admin-items-producent/admin-items-producent.component';
import { ImgPipe } from './Pipe/img/img.pipe';
import { NamePipe } from './Pipe/name/name.pipe';
import { DescPipe } from './Pipe/desc-pip/desc.pipe';
import { TopSectionComponent } from './Components/top-section/top-section.component';

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
    LogoutComponent,
    ActionsComponent,
    AdminMoviesComponent,
    ApstractAdminComponent,
    AdminNavbarComponent,
    AdminProducentComponent,
    AdminStarsComponent,
    AdminSeriesComponent,
    AdminTagsComponent,
    AdminComponent,
    MovieEditComponent,
    AbstractEditComponent,
    BaseGaleryComponent,
    AdminMoviesGaleryComponent,
    AbstractAdminNavbarComponent,
    MoviesAdminNavbarComponent,
    AdminItemsMoviesComponent,
    AdminMoviesStatsComponent,
    AdminStatsBaseComponent,
    SerieEditComponent,
    StarsEditComponent,
    ProducentEditComponent,
    AdminSeriesGaleryComponent,
    StarsAdminGaleryComponent,
    ProducentAdminGaleryComponent,
    BaseStatsComponentIDComponent,
    AdminSeriesStatasComponent,
    AdminStarsStatasComponent,
    BaseGaleryAdminComponent,
    AdminProducenrStatsComponent,
    BaseItemListComponent,
    BaseItemsSectionsComponent,
    AdminItemsSeriesComponent,
    AdminItemsStarsComponent,
    AdminItemsProducentComponent,
    ImgPipe,
    NamePipe,
    DescPipe,
    TopSectionComponent
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

