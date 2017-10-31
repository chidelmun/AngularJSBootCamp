import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(theArray: Object[], searchTerm: string,
            property: string, apply: boolean = true,
            showCompleted: boolean
           ): any {
    if (!theArray || theArray.length === 0 ) {
      return [];
    }
    if (!searchTerm || searchTerm.length === 0) {
      return theArray;
    }
    let result: Object[] = theArray;
    if (property && property.length > 0 && apply ) {
        const obj = theArray[0];
        result =  theArray.filter(
          (item) => {
            if (item[property]) {
              return item[property].includes(searchTerm);
            }else {
              return false;
            }
          }
        );
    }
    return result;
  }

}
