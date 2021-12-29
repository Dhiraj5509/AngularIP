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

    // once we get an error the observable stops emitting 
    this.observable = new Observable( observer =>{
      let count = 0 ; 
      setInterval(()=>{
        observer.next(count++) ; 

        // complete method halts the work of observer stating that task of observer is now completed
        if(count==2)
        {
          observer.complete() ; 
        }
        if(count>3){
          observer.error(new Error('Count Exceeds 3!')) ; 
        }
      } , 1000);
    })!;

    // observer subsribes to the observer
    this.observer = this.observable.subscribe((data : number)=>{
      console.log(data);
    },
     err =>{
      console.log(err);
      alert(err.message)
    } , 
    ()=>{
      console.log('observerable task completed');
      
    })
  }

  ngOnDestroy(): void {
    // observer unsubscribes to the observer
      this.observer.unsubscribe() ; 
  }



  

}
