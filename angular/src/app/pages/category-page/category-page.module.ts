import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { productsReducer } from 'src/app/store/shopping/products/products.reducer';
import { ProductsEffects } from 'src/app/store/shopping/products/products.effects';

const categoryPageRoutes: Routes = [
    { path: '**', component: CategoryPageComponent },
];

@NgModule({
    declarations: [CategoryPageComponent],
    imports: [
        RouterModule.forChild(categoryPageRoutes),
        StoreModule.forFeature('products', productsReducer),
        EffectsModule.forFeature([ProductsEffects]),
        CommonModule,
        SharedModule,
    ],
})
export class CategoryPageModule {}
