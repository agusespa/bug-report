import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/Product';

// export const loadProductById = createAction(
//   "[Products Internal] Load Products By Category",
//   props<{ category: string }>()
// );
//
// export const loadProductsFail = createAction(
//   "[Products API] Load Products Fail",
//   props<{ error: HttpErrorResponse }>()
// );
//
// export const loadProductsSuccess = createAction(
//   "[Products API] Load Products Success",
//   props<{ products: Product[] }>()
// );

export const loadProductsByCategory = createAction(
    '[Products Internal] Load Products By Category',
    props<{ category: string }>()
);

export const loadProductsFail = createAction(
    '[Products API] Load Products Fail',
    props<{ error: HttpErrorResponse }>()
);

export const loadProductsSuccess = createAction(
    '[Products API] Load Products Success',
    props<{ products: Product[] }>()
);
