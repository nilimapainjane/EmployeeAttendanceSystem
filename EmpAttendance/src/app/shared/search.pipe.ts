import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EmpFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val:any) => {
      let rVal = (val.id.toLocaleLowerCase().includes(args)) || (val.firstName.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}