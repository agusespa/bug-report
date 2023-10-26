import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/Product';
import {
    loadProductsByCategory,
    loadProductsFail,
    loadProductsSuccess,
} from './products.actions';

export interface ProductsState extends EntityState<Product> {
    loading: boolean;
    error: HttpErrorResponse | undefined;
}

export const productsAdapter = createEntityAdapter<Product>({
    selectId: (product) => product.id,
});

const initialState: ProductsState = productsAdapter.getInitialState({
    loading: false,
    error: undefined,
});

export const productsReducer = createReducer(
    initialState,
    on(loadProductsByCategory, (state, _) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(loadProductsSuccess, (state, action) => {
        return {
            ...productsAdapter.upsertMany(action.products, state),
            loading: false,
        };
    }),
    on(loadProductsFail, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    })
);
