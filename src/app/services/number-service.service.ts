import { Injectable } from '@angular/core';
import { LogService } from './log.service';
// saying angular that any component can use this service class/inject this class in their component
@Injectable({
  providedIn: 'root'
})
export class NumberServiceService {

  // assigning it as an private member , so no one outside this class can access this
  private numbers : number[] = [1,2,3,4,5] ; 

  // our number service depends on the logService
  constructor(private logService : LogService) { }

  // now our component can actually access this method after injecting the service
  getNumbers() : number[]{
    this.logService.logOnConsole('getNumbers() method of NumberService called!!') ; 
    return this.numbers ; 
  }
}
