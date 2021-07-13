import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { cartItem } from 'src/app/interface/cartItem';
import { CartService } from 'src/app/service/cart.service';
import { HttpService } from 'src/app/service/http.service';
import { product } from '../../service/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: cartItem[] = [];
  bsModalRef : BsModalRef;
  id:number;
  totalCost= 0;


  constructor(private cartService: CartService, private bsModalService: BsModalService,private http :HttpService) { }
  ngOnInit(): void {
    this.cart= this.cartService.cart;
    this.totalCost = this.cartService.totalCost();
    this.bsModalService.onShown.subscribe(data => {
      this.id = data.id;
    })
  
   
  }

  increaseItem(product: cartItem) {
    this.cartService.addProduct(product.product);
    this.resetTotalCost();
  }

  reduceItem(product: cartItem) {
    this.cartService.removeProduct(product);
    this.resetTotalCost();
  }

  resetTotalCost(){
   this.totalCost = this.cartService.totalCost();
  }

  hideCart(){
    this.bsModalService.hide(3);
    
    
  }
}
