import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentPage :number = 1 ; 
  totalPages = 2 ; 
  lis :{name:string , position:string , office:string , salary:number}[]= [] ; 
  li : any ; 
  constructor(private http : HttpClient){

  }
  ngOnInit(): void {
    let observable : Observable<Object> = this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')! ; 

    observable.subscribe((data)=>{
      if(data){
        this.li=data;
        this.lis=this.li.list;
      }
    }) ; 
  }

}
