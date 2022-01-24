import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule} from './/app-routing.module';
import { AppComponent } from './app.component';
import { NavabrComponent } from './navabr/navabr.component';
import { MoviesComponent } from './movies/movies.component';
import { StartComponentComponent } from './start-component/start-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabrComponent,
    MoviesComponent,
    StartComponentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

