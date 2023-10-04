import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { StoreFacade } from "src/app/facade/store.facade";
import { Product } from "src/app/models/Product";
import { loadProducts } from "src/app/store/product/product.actions";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  productList$: Observable<Product[]>;

  constructor(private storeFacade: StoreFacade, private store: Store) {
    this.productList$ = this.storeFacade.getProducts$;
  }
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
