import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsCart: product[]=[];
  constructor(private http : HttpService) { }
  
  public getProductsCart(){
    return this.productsCart;
  }
  public addProductCart(prod: product){
    this.productsCart.push(prod);
  }
 
  public resetCart(){
    this.productsCart= [];
  }

}
