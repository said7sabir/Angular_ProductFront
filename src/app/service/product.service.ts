import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  host="http://localhost:8089"
  
  
  constructor(private http:HttpClient) { }

  public getProducts(keyword:string="",page:number=1, size:number=4){
    return this.http.get(`${this.host}/products?name_like=${keyword}&_page=${page}&_limit=${size}`, {observe:"response"})
  }

  public checkProduct(product:Product):Observable<Product>{
    return this.http.patch<Product>(`${this.host}/products/${product.id}`, {checked:!product.checked})
  }

  public delete(product:Product){
    return this.http.delete(`${this.host}/products/${product.id}`)
  }

  public saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.host}/products`,product)
  }

  getById(productId:number):Observable<Product>{
    return this.http.get<Product>(`${this.host}/products/${productId}`)
  }

  public updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.host}/products/${product.id}`, product)
  }
  /*public searchProduct(keyword:string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.host}/products?name_like=${keyword}`)
  }*/

}
