import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/core/models/item';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  formProduct: FormGroup;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.formProduct = new FormGroup({
      quantity: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  onAddItem() {
    const quantity = this.formProduct.controls.quantity.value;
    const item = new Item(this.product, quantity);

    this.cartService.addItem(item);
  }

  onRemoveItem() {
    this.cartService.removeItem(this.product);
  }

}
