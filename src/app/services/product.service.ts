import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/product";
import {ProductCategory} from "../common/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";
  private categoryUrl = "http://localhost:8080/api/product-categories";

  constructor(private httpClient: HttpClient) {
  }

  getProductList(theCategoryId: number): Observable<Product[]> {
    const searchUrl = this.baseUrl + "/search/categoryId?id=" + theCategoryId;
    // @ts-ignore
    return this.httpClient.get(searchUrl).pipe();
  }

  getProductCategories(): Observable<ProductCategory[]> {
    // @ts-ignore
    return this.httpClient.get(this.categoryUrl).pipe();
  }

  searchProducts(theKeyword: string): Observable<Product[]>{
    const searchUrl = this.baseUrl + "/search/keyword?name=" + theKeyword;
    // @ts-ignore
    return this.httpClient.get(searchUrl).pipe();
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = this.baseUrl + "/" + theProductId;
    // @ts-ignore
    return this.httpClient.get(productUrl).pipe();
  }
}

