import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/interface/cartItem';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  cart: cartItem[]=[];
  totalCost = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.totalCost = this.cartService.totalCost();
  }

}
