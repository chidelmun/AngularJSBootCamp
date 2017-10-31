import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(theArray: Object[], searchTerm: string, property: string, disable: boolean = false ): any {
    if (!theArray || theArray.length === 0 ) {
      return [];
    }
    if (!searchTerm || searchTerm.length === 0) {
      return theArray;
    }
    let result: Object[] = theArray;
    if (property && property.length > 0 && !disable ) {
      const obj = theArray[0];
      if ( obj.hasOwnProperty(property) ) {
        result =  theArray.filter(
          (item) => {
            return item[property].includes(searchTerm);
          }
        );
      }
    }
    return result;
  }

}
