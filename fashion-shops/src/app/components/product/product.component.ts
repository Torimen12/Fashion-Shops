import { Component, Input, OnInit } from '@angular/core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { CartService } from 'src/app/service/cart.service';
import { product } from 'src/app/service/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  faHeart = faHeart;
  @Input() className: string;
  @Input() prod : product;
  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addProductCart(this.prod);
  }

}

// "id": 1,
//     "type": "watch",
//     "type-detail": "female-watch",
//     "name": "female-watch1",
//     "sale": 0,
//     "cost": 0,
//     "img": "../../../assets/products/watch/female-watch/female-watch1.jpg"
