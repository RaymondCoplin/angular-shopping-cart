import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/item';
import { setDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemCount: number;
  amountTotal: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {

    this.cartService.cart.subscribe(items => {
      this.itemCount = items.length;
    });

    this.cartService.total.subscribe(total => {
      this.amountTotal = total;
    });

  }

}
