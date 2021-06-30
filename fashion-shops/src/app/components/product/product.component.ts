import { Component, Input, OnInit } from '@angular/core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  faHeart = faHeart;
  @Input() className: string;
  @Input() type : string;
  @Input() typeDetail : string;
  @Input() name : string;
  @Input() img : string;
  @Input () cost: number;
  @Input() sale : number;
  @Input() isNew: number;
  constructor() { 
  }

  ngOnInit(): void {
  }

}

// "id": 1,
//     "type": "watch",
//     "type-detail": "female-watch",
//     "name": "female-watch1",
//     "sale": 0,
//     "cost": 0,
//     "img": "../../../assets/products/watch/female-watch/female-watch1.jpg"
