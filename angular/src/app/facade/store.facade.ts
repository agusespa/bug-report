import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../models/Product";
import { selectAllProducts } from "../store/product/product.selectors";

@Injectable({ providedIn: "root" })
export class StoreFacade {
  constructor(private store: Store) {}

  getProducts$: Observable<Product[]> = this.store.pipe(
    select(selectAllProducts)
  );
}
