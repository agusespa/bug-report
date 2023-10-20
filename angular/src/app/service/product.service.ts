import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { mapToProducts, ProductsResponse } from "../models/Product";
import { map } from "rxjs/operators";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductsByCategory(category: string) {
    return this.http
      .get<ProductsResponse>(
        `https://dummyjson.com/products/category/${category}`
      )
      .pipe(map((res) => mapToProducts(res.products)));
  }

  getCategories() {
    return this.http.get<string[]>("https://dummyjson.com/products/categories");
  }
}
