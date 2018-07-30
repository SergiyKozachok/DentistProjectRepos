import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDentistByName'
})
export class SearchDentistByNamePipe implements PipeTransform {

  transform(dentists, value) {
    return dentists.filter(dentist => {
      return dentist.name.includes(value);
    });
  }

}
