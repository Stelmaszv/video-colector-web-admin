import { Component, OnInit } from '@angular/core';
import { AbstractAdminNavbarComponent } from '../abstract-admin-navbar/abstract-admin-navbar.component';

@Component({
  selector: 'app-movies-admin-navbar',
  templateUrl: '../abstract-admin-navbar/abstract-admin-navbar.component.html',
  styleUrls: ['../abstract-admin-navbar/abstract-admin-navbar.component.scss']
})
export class MoviesAdminNavbarComponent extends AbstractAdminNavbarComponent{
}
