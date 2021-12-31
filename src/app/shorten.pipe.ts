import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, toUpper: boolean): string {
    let matches = value.match(/\b(\w)/g)!;
    let acronym = matches.join('');
    if (toUpper) {
      return (" " + acronym + " ").toUpperCase();
    }
    else {
      return (" " + acronym + " ").toLowerCase() ; 
    }
  }
}
