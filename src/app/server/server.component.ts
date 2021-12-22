import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {
  // here our template can now call the methods of this class ServerComponent
  getServerName() {
    let names = ['google' , 'aws']
    let name = names[Math.floor(Math.random()*names.length)]; 
    return name ;
  }

  getServerStatus(){
    let names = ['active' , 'not-active']
    let name = names[Math.floor(Math.random()*names.length)]; 
    return name ; 
  }
 
}
