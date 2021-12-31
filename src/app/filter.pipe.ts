import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter' , 
  pure: false 
})
export class FilterPipe implements PipeTransform {

  transform(servers: {
    instanceType: string,
    name: string,
    status: string,
    started: Date,
    criticalRate: number
  }[], filterStirng: string, filteredProperty: any): {
    instanceType: string,
    name: string,
    status: string,
    started: Date,
    criticalRate: number
  }[] {
    if (servers.length === 0 || filterStirng === '') {
      return servers;
    }

    const filteredServers: {
      instanceType: string,
      name: string,
      status: string,
      started: Date,
      criticalRate: number
    }[] = [];

    for (let server of servers) {

      if(server[filteredProperty].toString().toLowerCase().includes(filterStirng.toLowerCase()))
      {
        filteredServers.push(server);
      }
     
    }
    return filteredServers;
  }

}
