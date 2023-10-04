import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs/internal/observable/of";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ProductService } from "src/app/service/product.service";
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFail,
} from "./product.actions";

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => loadProductsSuccess({ products })),
          catchError((error) => of(loadProductsFail({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
