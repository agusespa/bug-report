import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoriesState } from "./categories.reducer";

const getCategoriesFeatureState =
  createFeatureSelector<CategoriesState>("categories");

export const selectAllCategories = createSelector(
  getCategoriesFeatureState,
  (state) => state.categories
);
