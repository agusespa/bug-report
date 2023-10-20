import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'products/:category',
        loadChildren: () =>
            import('./pages/category-page/category-page.module').then(
                (m) => m.CategoryPageModule
            ),
    },
    {
        path: 'product/:id',
        loadChildren: () =>
            import('./pages/product-page/product-page.module').then(
                (m) => m.ProductPageModule
            ),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
