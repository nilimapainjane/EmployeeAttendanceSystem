import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'content'
})

export class ContentPipes implements PipeTransform{
    transform(val:any,arg:any)
    {
      if(arg === undefined){return val}
      if(val.length>=arg)
      {
        return val.substring(0,arg)+"..."
      }
    }
}