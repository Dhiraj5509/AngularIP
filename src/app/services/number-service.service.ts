import { Injectable } from '@angular/core';

// saying angular that any component can use this service class/inject this class in their component
@Injectable({
  providedIn: 'root'
})
export class NumberServiceService {

  // assigning it as an private member , so no one outside this class can access this
  private numbers : number[] = [1,2,3,4,5] ; 
  constructor() { }

  getNumbers() : number[]{
    return this.numbers ; 
  }
}
