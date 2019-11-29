import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'projects/bdatos/src/lib/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-product-detail',
  templateUrl: './page-product-detail.component.html',
  styleUrls: ['./page-product-detail.component.css']
})
export class PageProductDetailComponent implements OnInit {

  product: Product;

  constructor(private router: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    this.router.params.subscribe(parametros => {
      this.service.getProductById(Number(parametros.id))
      .subscribe(producto =>
        this.product = producto);
      });
  }

}
