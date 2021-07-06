import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/interface/cartItem';
import { CartService } from 'src/app/service/cart.service';
import { product } from '../../service/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsCart: product[] = [];
  totalCost: number = 0;
  cart: cartItem[] = [];

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.productsCart = this.cartService.getProductsCart();
    this.resetTotalCost();
    console.log("total cost:", this.totalCost);
    console.log("products in cart:", this.productsCart);
    this.addCart();
  }

  addCart() {
    this.productsCart.forEach(prod => {
      let has: boolean = false;
      this.cart.forEach(prod1 => {
        if (prod1.product.id === prod.id) {
          prod1.number++;
          has = true;
        }
      })
      if (!has) {
        this.cart.push({
          "product": prod,
          "number": 1
        });
      }
    })
  }

  addItem(product: cartItem) {
    this.productsCart.push(product.product);
    for (let i = 0; i < this.cart.length; i++) {
      if (product.product.id === this.cart[i].product.id) {
        this.cart[i].number++;
      }
    }
    this.resetTotalCost()
  }

  removeItem(product: cartItem) {
    if (product.number > 0) {
      let temp = 0;
      for (let i = 0; i < this.productsCart.length; i++) {
        if (product.product.id === this.productsCart[i].id) {
          temp = i;
          break;
        }
      }
      this.productsCart.splice(temp, 1);
      for (let i = 0; i < this.cart.length; i++) {
        if (product.product.id === this.cart[i].product.id) {
          if (this.cart[i].number > 0) {
            this.cart[i].number--;
          }
        }
      }
    }
    this.resetTotalCost();
  }

  resetTotalCost(){
    this.totalCost =0;
    this.productsCart.forEach(pro => {
      this.totalCost = this.totalCost + pro.cost * (100 - pro.sale) / 100
    })
  }
}
