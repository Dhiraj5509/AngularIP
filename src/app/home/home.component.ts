import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  observable; 
  observer : Subscription; 
  constructor() { }

  ngOnInit() {
    // create a new Observable 
    // if observable wants to emit any data to the observer then we use next() method 
    // if observable wants to emit any error to the observer then we use error() method 
    // if task of observer is completed then we use complete() method ; 
    this.observable = new Observable( observer =>{
      let count = 0 ; 
      setInterval(()=>{
        observer.next(count++) ; 
      } , 1000);
    })!;

    // observer subsribes to the observer
    this.observer = this.observable.subscribe((data : number)=>{
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    // observer unsubscribes to the observer
      this.observer.unsubscribe() ; 
  }



  

}
