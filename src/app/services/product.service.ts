import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) {
  }

  getProductList(): Observable<Product[]> {
    // @ts-ignore
    return this.httpClient.get(this.baseUrl).pipe()
  }
}