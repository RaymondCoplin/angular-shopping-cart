import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { Item } from '../models/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  estadoInicial = JSON.parse(localStorage.getItem('carrito')) || [];

  cart = new BehaviorSubject<Item[]>(this.estadoInicial);

  // Observable heredado del contenedor del carrito que me retorna el monto total de items.
  total = this.cart.pipe(
    map(items => items.reduce(this.acumulador, 0))
  );

  totalForeach = this.cart.pipe(
    map(items => {
      let acumulado = 0;
      items.forEach(current => {
        acumulado = acumulado + (current.product.price * current.quantity);
      });
      return acumulado;
    })
  );

  // Acumulador que empieza en 0 y va sumarizando el monto total de cada item
  acumulador(acumuladorVar: number, currentItem: Item): number {
    return acumuladorVar + (currentItem.product.price * currentItem.quantity);
  }

  // producto1 $120 * 1
  // producto2 $10 * 2

  // 0 + (120 * 1) = 120
  // 120 + (10 * 2) = 140

  constructor() { }

  addItem(currentItem: Item) {

    // Obteniendo estado del carrito
    const items = [...this.cart.value];

    // Saber si existe el item, si no existe el index es -1
    const itemIndex = items.findIndex(item => item.product.id === currentItem.product.id);

    // Si el indice es mayor de -1, el item existe dentro del carrito.
    if (itemIndex > -1) {
      const itemCarritoExistente = items[itemIndex];
      itemCarritoExistente.quantity = itemCarritoExistente.quantity + currentItem.quantity;
      items[itemIndex] = itemCarritoExistente;
    } else {
      // Agregando un item al carrito
      items.push(currentItem);
    }

    // Actualizando el estado del contenedor de carrito, para que le notifique a sus observadores subscritos.
    this.cart.next(items);
    localStorage.setItem('carrito', JSON.stringify(items));
  }

  removeItem(producto: Product) {
    const items = [...this.cart.value];
    const index = items.findIndex(item => item.product.id === producto.id);

    if (index > -1) {
      items.splice(index, 1);
    }

    this.cart.next(items);
    localStorage.setItem('carrito', JSON.stringify(items));
  }

}


