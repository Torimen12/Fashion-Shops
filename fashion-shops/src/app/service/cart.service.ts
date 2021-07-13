import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartItem } from '../interface/cartItem';
import { HttpService } from './http.service';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http : HttpService) { }
  cart: cartItem[]=[];
  public addProduct(product: product){
    let temp=-1;
    if(this.cart.length===0){
      this.cart.push({"product": product,"number":1});
    }
    else{
      this.cart.forEach((prod,index)=>{
        if(product.id===prod.product.id){
          temp = index;
        }
      });
      if(temp!==-1){
        this.cart[temp].number=this.cart[temp].number+1;
      }
      else{
        this.cart.push({"product":product,"number":1});
      }
    }
  }

  public removeProduct(product:cartItem){
    let temp = -1;
    if(product.number>0){
      this.cart.forEach((prod,index)=>{
        if(product.product.id===prod.product.id){
          temp = index;
        }
      });
      if(temp!==-1){
        this.cart[temp].number=this.cart[temp].number-1;
      }
    }
  }

  public totalCost(){
    let cost = 0;
    this.cart.forEach(prod=>{
      cost = cost+prod.number*(prod.product.cost*(100-prod.product.sale)/100);
    })
    return cost;
  }

}
