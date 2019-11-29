import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { PageProductDetailComponent } from './features/page-product-detail/page-product-detail.component';
import { PageCreateProductComponent } from './features/page-create-product/page-create-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: PageProductDetailComponent  },
  { path: 'create', component: PageCreateProductComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
