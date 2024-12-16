import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Pokemon[], searchTerm: string): Pokemon[]  {
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
