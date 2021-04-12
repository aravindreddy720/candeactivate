import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'black'
})
export class BlackPipe implements PipeTransform {


  date = new Date;

  transform(value: any, ...args: any[]): any {
    return value.toString().toUpperCase();
  }

}
