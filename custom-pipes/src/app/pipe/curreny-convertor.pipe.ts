import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currenyConvertor',
})
export class CurrenyConvertorPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    const rate = args.length > 0 ? args[0] : 96;
    if (typeof rate === 'number') {
      return value * rate;
    }
    return value * 96;
  }
}
