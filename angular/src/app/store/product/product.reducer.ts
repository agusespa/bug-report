import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { HttpErrorResponse } from "@angular/common/http";
import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/models/Product";
import {
  loadProducts,
  loadProductsFail,
  loadProductsSuccess,
} from "./product.actions";

export interface ProductState extends EntityState<Product> {
  loading: boolean;
  error: HttpErrorResponse | undefined;
}

export const productAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});

const initialState: ProductState = productAdapter.getInitialState({
  loading: false,
  error: undefined,
});

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state, _) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadProductsSuccess, (state, action) => {
    return {
      ...productAdapter.setAll(action.products, state),
      loading: false,
    };
  }),
  on(loadProductsFail, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
