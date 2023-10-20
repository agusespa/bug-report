import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from 'src/app/store/shopping/products/products.effects';
import { productsReducer } from 'src/app/store/shopping/products/products.reducer';
import { ProductViewComponent } from './product-view/product-view.component';

const productPageRoutes: Routes = [
  { path: "**", component: ProductPageComponent },
];

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductViewComponent
  ],
  imports: [
    RouterModule.forChild(productPageRoutes),
    StoreModule.forFeature("products", productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    CommonModule,
    SharedModule,
  ]
})
export class ProductPageModule { }
