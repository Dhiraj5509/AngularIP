import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [{
    id: 10 ,
    name:"Tomcat" 
  } ,
  {
    id: 11 ,
    name:"Glassfish" 
  }] ; 
  constructor() { }

  ngOnInit(): void {
  }

}
