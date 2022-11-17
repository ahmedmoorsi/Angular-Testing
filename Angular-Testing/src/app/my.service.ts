import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  checkTime() : string {
    let myDate = new Date();
    let myTime = myDate.getHours() + " : " + myDate.getMinutes();
    return myTime;
  }

  
}
