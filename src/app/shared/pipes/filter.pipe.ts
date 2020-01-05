import { Pipe, PipeTransform } from '@angular/core';
import { PostalCode } from '../models/postal-code.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: PostalCode[], searchText: string): PostalCode[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.postal_code.toLowerCase().includes(searchText);
    });
  }

}
