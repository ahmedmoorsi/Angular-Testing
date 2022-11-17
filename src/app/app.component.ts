import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myproject';
  firstTest = 'this is my first test';

  appTime ='';
  meetAt = "";
  constructor (private myService : MyService){

  }

ngOnInit(): void {
  this.appTime = this.myService.checkTime();
  if(this.appTime === '12:00'){
    this.meetAt = "high Noon - meet at the OK corral"
  }else{
    this.meetAt = "see you at the root beer saloon"
  }
}


}


