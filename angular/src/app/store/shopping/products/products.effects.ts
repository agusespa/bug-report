import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product.service';
import {
    loadCategories,
    loadCategoriesFail,
    loadCategoriesSuccess,
} from '../categories/categories.actions';
import {
    loadProductsByCategory,
    loadProductsSuccess,
    loadProductsFail,
} from './products.actions';

@Injectable()
export class ProductsEffects {
    loadProductsByCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProductsByCategory),
            mergeMap((action) =>
                this.productService.getProductsByCategory(action.category).pipe(
                    map((products) => loadProductsSuccess({ products })),
                    catchError((error) => of(loadProductsFail({ error })))
                )
            )
        )
    );

    loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCategories),
            mergeMap(() =>
                this.productService.getCategories().pipe(
                    map((categories) => loadCategoriesSuccess({ categories })),
                    catchError((error) => of(loadCategoriesFail({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}
}
