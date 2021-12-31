import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredString: string = "";
  selectedLevel = 'status';

  pi = Math.PI;
  properties: string[] = []
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(),
      criticalRate: 0.10
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(),
      criticalRate: 0.15
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(),
      criticalRate: 0
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(),
      criticalRate: 0.20
    },
    {
      instanceType: 'medium',
      name: 'Development server',
      status: 'critical',
      started: new Date(),
      criticalRate: 0.65
    }
  ];
  constructor() {
    console.log(Object.keys(this.servers));
  }


  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onFilterSelected() {

  }

}
