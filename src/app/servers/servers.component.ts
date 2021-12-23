import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = "Tomcat" ; 
  serverStatus = "not created server yet" ; 
  isServerButtonDisabled = true ; 
  constructor() { 
    setTimeout(()=>{
      this.isServerButtonDisabled = false ; 
    } , 2000);
  }

  OnTextChanged(event : Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value ; 
    console.log(this.serverName);
  }

  OnServerCreateButtonClicked()
  {
    this.serverStatus = "created server" ; 
  }
  ngOnInit(): void {
  }

}
