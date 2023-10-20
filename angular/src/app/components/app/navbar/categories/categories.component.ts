import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingFacade } from 'src/app/facade/shopping.facade';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
    categoryList$: Observable<string[] | undefined>;
    showView = false;

    constructor(private shoppingFacade: ShoppingFacade) {}

    ngOnInit(): void {
        this.categoryList$ = this.shoppingFacade.getCategories$();
    }

    toggleView() {
        this.showView = !this.showView;
    }
}
