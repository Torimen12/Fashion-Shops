import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/interface/cartItem';
import { CartService } from 'src/app/service/cart.service';
import { HttpService } from 'src/app/service/http.service';
import { product } from 'src/app/service/product';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss']
})
export class BillDetailComponent implements OnInit {
  totalCost: number = 0;
  cart: cartItem[];
  constructor(private cartService: CartService, private http: HttpService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.totalCost = this.cartService.totalCost();
  }

}
