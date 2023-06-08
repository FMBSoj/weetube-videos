import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], searchInput: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(searchInput, 'i')) > -1) : [];
  }

}
