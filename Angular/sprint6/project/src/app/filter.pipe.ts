import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './Todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(theArray: Todo[], showCompleted: boolean): Todo[] {
    if (!theArray || theArray.length === 0 ) {
      return [];
    }
    if (showCompleted ) {
      return theArray;
    }
    const result = theArray.filter(
      (item) => item['done'] === false
    );

    return result;
  }

}
