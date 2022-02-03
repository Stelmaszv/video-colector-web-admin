import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-star-photo',
  templateUrl: './star-photo.component.html',
  styleUrls: ['./star-photo.component.scss']
})
export class StarPhotoComponent implements OnInit {
  @Input() ID:any=0
  constructor() { }

  ngOnInit(): void {
  }

}
