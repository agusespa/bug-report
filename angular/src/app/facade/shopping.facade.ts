import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/Product';
import {
    selectProduct,
    selectProductsByCategory,
} from '../store/shopping/products/products.selectors';
import { selectAllCategories } from '../store/shopping/categories/categories.selectors';
import { loadProductsByCategory } from '../store/shopping/products/products.actions';
import { loadCategories } from '../store/shopping/categories/categories.actions';

@Injectable({ providedIn: 'root' })
export class ShoppingFacade {
    constructor(private store: Store) {}

    getCategories$(): Observable<string[]> {
        return this.store.pipe(
            select(selectAllCategories),
            tap((data) => {
                if (!data || data.length === 0) {
                    this.store.dispatch(loadCategories());
                }
            })
        );
    }

    getProductsByCategory$(category: string): Observable<Product[]> {
        this.store.dispatch(loadProductsByCategory({ category }));
        return this.store.pipe(select(selectProductsByCategory(category)));
    }

    getProductById$(id: string): Observable<Product | undefined> {
        return this.store.pipe(select(selectProduct(Number(id))));
    }
}
