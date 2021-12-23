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
  isStatusEnabled = false ; 
  
  constructor() { 
    
  }

  shouldServerDisable()
  {
    if(this.serverName === '')
    {
      this.isServerButtonDisabled = true ; 
      return true ; 
    }
    this.isServerButtonDisabled = false ; 
    return false ; 
  }

  OnTextChanged(event : Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value ; 
    console.log(this.serverName);
  }

  OnServerCreateButtonClicked()
  {
    this.isStatusEnabled = true ; 
    this.serverStatus = "created server and the name is " +  this.serverName ; 
  }

  getColour()
  {
    if(!this.isServerButtonDisabled) return 'green' ; 
    else return 'red' ; 
  } 

  getColorNgStyle()
  {
    if(this.isServerButtonDisabled) return false ; 
    return true ;
  }
  ngOnInit(): void {
  }

}
