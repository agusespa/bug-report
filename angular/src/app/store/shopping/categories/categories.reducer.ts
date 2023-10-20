import { HttpErrorResponse } from "@angular/common/http";
import { createReducer, on } from "@ngrx/store";
import {
    loadCategories,
    loadCategoriesFail,
    loadCategoriesSuccess,
} from "./categories.actions";

export interface CategoriesState {
    categories: string[];
    loading: boolean;
    error: HttpErrorResponse | undefined;
}

const initialState: CategoriesState = {
    categories: [],
    loading: false,
    error: undefined,
};

export const categoriesReducer = createReducer(
    initialState,
    on(loadCategories, (state, _) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(loadCategoriesSuccess, (state, action) => {
        return {
            ...state,
            categories: action.categories,
            loading: false,
        };
    }),
    on(loadCategoriesFail, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    })
);
