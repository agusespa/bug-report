import { NgModule } from "@angular/core";
import { ProductPageComponent } from "./product-page.component";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { productReducer } from "src/app/store/product/product.reducer";
import { ProductEffects } from "src/app/store/product/product.effects";
import { CommonModule } from "@angular/common";

const productPageRoutes: Routes = [
  { path: "**", component: ProductPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(productPageRoutes),
    StoreModule.forFeature("product", productReducer),
    EffectsModule.forFeature([ProductEffects]),
    CommonModule,
  ],
  declarations: [ProductPageComponent, ProductListComponent],
})
export class ProductPageModule {}
