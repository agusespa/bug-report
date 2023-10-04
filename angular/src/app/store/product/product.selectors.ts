import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productAdapter, ProductState } from "./product.reducer";

export const selectProductState =
  createFeatureSelector<ProductState>("product");

export const selectAllProducts = createSelector(
  selectProductState,
  productAdapter.getSelectors().selectAll
);
