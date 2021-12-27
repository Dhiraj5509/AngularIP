import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logOnConsole(message : string)
  {
    console.log(message ,new Date()) ; 
  }
}
