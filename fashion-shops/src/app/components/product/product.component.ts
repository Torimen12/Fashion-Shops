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
  constructor() { }

  ngOnInit(): void {
  }

}
