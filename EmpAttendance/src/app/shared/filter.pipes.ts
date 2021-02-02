

import { Pipe , PipeTransform , Injectable} from '@angular/core';


//arg=15

@Pipe({
    name:'filter'
})


@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field : string, value : string): any[] {    

    if (!items) return [];
        
    if (!value || value.length == 0) return items;

    return items.filter(it => 
    it[field].toLowerCase().indexOf(value.toLowerCase()) !=-1);
  }
}


// export class FilterPipe implements PipeTransform
// {
//     transform(items: any[], filter: Object): any {

//         if (!items || !filter) {
//             return items;
//         }
//         // filter items array, items which match and return true will be
//         // kept, false will be filtered out
//        // return items.filter(data => data.product.indexOf(filter) !== -1);
//     }
         
//     }


