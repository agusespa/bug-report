import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { mapToProducts, ProductResponse } from "../models/Product";
import { map } from "rxjs/operators";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductResponse[]>("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").pipe(map((res) => mapToProducts(res)));
  }
}
