import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'projects/bdatos/src/lib/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-create-product',
  templateUrl: './page-create-product.component.html',
  styleUrls: ['./page-create-product.component.css']
})
export class PageCreateProductComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required ],
      description: [''],
      price: [0, Validators.required ],
      unit: [''],
      image: ['', Validators.required ]
    });
  }

  onCreateProduct() {
    this.productService.createProduct(this.form.value)
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  onCancel() {
    this.form.reset();
  }

}
