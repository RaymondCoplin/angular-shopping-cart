import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './features/home/home.component';
import { SharedModule } from './shared/shared.module';
import { PageProductDetailComponent } from './features/page-product-detail/page-product-detail.component';
import { PageCreateProductComponent } from './features/page-create-product/page-create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService, BdatosModule } from 'projects/bdatos/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageProductDetailComponent,
    PageCreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
