import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('product Service');
  }
  getProductData() {
    return [
      {
        name: 'Mobile',
        brand: 'Samsung',
        price: 35000,
      },
      {
        name: 'Laptop',
        brand: 'HP',
        price: 51000,
      },
      {
        name: 'Washing Machine',
        brand: 'LG',
        price: 40000,
      },
    ];
  }
}
