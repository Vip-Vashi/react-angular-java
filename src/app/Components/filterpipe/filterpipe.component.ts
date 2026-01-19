import { Component, Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterpipeComponent implements PipeTransform {
  transform(items: any[], filterText: string): any[] {
    if (!items || !filterText) {
      return items;
    }
    return items.filter(item => item.includes(filterText));
  }
}
