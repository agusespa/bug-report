import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsAdapter, ProductsState } from './products.reducer';

export const selectProductsState =
    createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
    selectProductsState,
    productsAdapter.getSelectors().selectAll
);

export const selectProductsByCategory = (category: string) =>
    createSelector(selectAllProducts, (products) =>
        products.filter((product) => product.category === category)
    );

export const selectProduct = (id: number) =>
    createSelector(selectAllProducts, (products) =>
        products.find((product) => product.id === id)
    );
