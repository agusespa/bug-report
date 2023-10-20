import {
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ShoppingFacade } from 'src/app/facade/shopping.facade';
import { Product } from 'src/app/models/Product';

@Component({
    selector: 'app-category-page',
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit, OnDestroy {
    productList$: Observable<Product[]>;
    private destroy$ = new Subject<void>();
    category: string;

    constructor(
        private shoppingFacade: ShoppingFacade,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
            const newCategory = params['category'];
            this.category = newCategory;
            this.productList$ =
                this.shoppingFacade.getProductsByCategory$(newCategory);
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
