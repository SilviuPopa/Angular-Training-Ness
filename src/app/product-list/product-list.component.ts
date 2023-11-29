import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() category: string = "";

  products: Product[] = [
    { id: 1, name: 'TV', category: 'house' },
    { id: 2, name: 'fridge', category: 'house' },
    { id: 3, name: 'ball', category: 'sport' },
    { id: 4, name: 'mouse', category: 'work' },
    { id: 5, name: 'wood', category: 'garden' },
    { id: 6, name: 'ruller', category: 'garden' },
  ];
}
