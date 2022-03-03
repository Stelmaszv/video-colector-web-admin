import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-abstract-admin-navbar',
  templateUrl: './abstract-admin-navbar.component.html',
  styleUrls: ['./abstract-admin-navbar.component.scss']
})
export class AbstractAdminNavbarComponent implements OnInit{
  @Input() public id:any
  @Input() public title:any;
  @Input() public place:any;
  public item_url:any
  public edit_url:any
  public galery_url:any
  public items_url:any
  public stats_url:any

  public ngOnInit(): void {
      this.set_links()
  }

  private set_links():void{
    this.item_url=['/'+this.place+'/',this.id]
    this.edit_url=['/admin/'+this.place+'/edit/',this.id]
    this.galery_url=['/admin/'+this.place+'/galery/',this.id]
    this.items_url=['/admin/'+this.place+'/items/',this.id]
    this.stats_url=['/admin/'+this.place+'/stars/',this.id]
  }
  
}
