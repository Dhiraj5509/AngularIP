// Component 
// 1) selector 
// 2) url 
// 3) html file url(template url)

import { Component } from '@angular/core';
import { NumberServiceService } from './services/number-service.service';
// we usually add a decorator "@Component" to give that class the power of the component
// @Component({})
@Component({

  // the matching tag needed in index.html / template file
  // the selector must be unique and shouldn't collide with the other selectors
  selector: 'app-root',
  // the html file needed to be served when this component is served
  templateUrl: './app.component.html',
  // the styles to apply to the html file rendered
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numbers : number[] ; 

  // we have injected the NumberService dependency in our component via the constructor!
  constructor(private numberService : NumberServiceService ){
    this.numbers = numberService.getNumbers() ; 
  }
}
