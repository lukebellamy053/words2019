import { Pipe, PipeTransform } from '@angular/core';
import { content } from '../data/strings';

@Pipe({
  name: 'externalString'
})
export class ExternalStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const keys = value.split(' ');
    let current = content;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if(current[key]) {
        current = current[key];
      } else {
        return null;
      }
    }
    return current || null;
  }

}
