import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/Product";

export const loadProducts = createAction("[Products Internal] Load Products");

export const loadProductsFail = createAction(
  "[Products API] Load Products Fail",
  props<{ error: HttpErrorResponse }>()
);

export const loadProductsSuccess = createAction(
  "[Products API] Load Products Success",
  props<{ products: Product[] }>()
);
