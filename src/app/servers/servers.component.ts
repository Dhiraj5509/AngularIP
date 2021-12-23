import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = "Tomcat!" ; 
  isServerButtonDisabled = true ; 
  constructor() { 
    setTimeout(()=>{
      this.isServerButtonDisabled = false ; 
    } , 2000);
  }

  ngOnInit(): void {
  }

}
