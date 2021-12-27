import { Injectable } from '@angular/core';

// this class is a normal service , it doesn't require any dependency 
// so we are not placing the special metadata i.e. @Decorator
export class LogService {

  constructor() { }

  logOnConsole(message : string)
  {
    console.log(message ,new Date()) ; 
  }
}
