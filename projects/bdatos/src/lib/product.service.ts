import { Injectable } from '@angular/core';
import { Product } from '../../../../src/app/core/models/product';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  // Observable para obtener los productos
  products = this.http.get<Array<Product>>('https://hamburgerapi.azurewebsites.net/api/products');

  // Observable para obtener un solo producto
  getProductById(idParametro: number): Observable<Product> {
    return this.products.pipe(
      map(response => response.find(producto => producto.id === idParametro))
    );
  }

  // Observable para crear productos
  createProduct(producto: Product): Observable<Product> {
    return this.http.post<Product>('https://hamburgerapi.azurewebsites.net/api/products', producto);
  }

}
