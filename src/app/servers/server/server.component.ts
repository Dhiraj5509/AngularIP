import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // @Input() decorator is for saying angular that this component is expecting some 
  @Input()
  server: {
    id: number , name:string
  }
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
