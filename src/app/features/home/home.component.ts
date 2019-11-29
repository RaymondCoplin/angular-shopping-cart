import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'projects/bdatos/src/lib/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<Product>;

  constructor(private servicio: ProductService) { }

  ngOnInit() {
    this.servicio.products.subscribe(response => {
      this.products = response;
    });
  }

}
