import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule} from './/app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavabrComponent } from './navabr/navabr.component';
import { MoviesComponent } from './movies/movies.component';
import { StartComponentComponent } from './start-component/start-component.component';
import { SeriesComponent } from './series/series.component';
import { StarsComponent } from './stars/stars.component';
import { ProducentComponent } from './producent/producent.component';
import { StringLenghtPipe } from './string-lenght.pipe';
import { BaseListComponent } from './base-list/base-list.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { BaseFilterComponent } from './base-filter/base-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    BaseListComponent,
    MoviesFilterComponent,
    BaseFilterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

