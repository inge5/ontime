import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public userside: any;
  data:any = [];

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { 

  }
  ngOnInit(): void {

    var obj = {
      name: 'Jhon',
      lastname: 'Bliss',
      city: 'Florida'
    }
    Object.keys(obj);
    for (var i in obj) {
      
    }
    this._homeservice.getHomeOnTime()
    .subscribe((res:any) => {
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
    });
  }
  abrirSide(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }

}
