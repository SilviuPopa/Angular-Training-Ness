import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterByCateogry',
})
export class FilterByCateogryPipe implements PipeTransform {
  transform(products: Product[], category: string): Product[] {
    if(category == "All") return products;
    return products.filter((product) => product.category == category);
  }
}
