import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product.service';
import {
    loadCategories,
    loadCategoriesFail,
    loadCategoriesSuccess,
} from './categories.actions';

@Injectable()
export class CategoriesEffects {
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
