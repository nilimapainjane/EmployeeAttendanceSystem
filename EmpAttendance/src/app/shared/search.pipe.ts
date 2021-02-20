import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Empfilter'  
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item:any){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}


@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(items: any[], sortedBy: string): any {
      console.log('sortedBy', sortedBy);
      
      return items.sort((a, b) => {return b[sortedBy] - a[sortedBy]});
  }
}