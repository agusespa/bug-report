import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState } from './categories.reducer';

const selectCategoriesFeatureState =
    createFeatureSelector<CategoriesState>('categories');

export const selectAllCategories = createSelector(
    selectCategoriesFeatureState,
    (state) => state.categories
);
