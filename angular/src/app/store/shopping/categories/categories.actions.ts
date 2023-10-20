import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";

export const loadCategories = createAction("[Categories Internal] Load Categories");

export const loadCategoriesFail = createAction(
  "[Categories API] Load Categories Fail",
  props<{ error: HttpErrorResponse }>()
);

export const loadCategoriesSuccess = createAction(
  "[Categories API] Load Categories Success",
  props<{ categories: string[] }>()
);
