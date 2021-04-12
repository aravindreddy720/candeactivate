import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestring'
})
export class ReversestringPipe implements PipeTransform {

  transform(value: any): any {
    
    let reversevalue: string = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reversevalue = reversevalue + value[i];
    }
    return reversevalue;
  }

}
