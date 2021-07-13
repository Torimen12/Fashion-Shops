import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss']
})
export class EmptyCartComponent implements OnInit {

  constructor(private bsModalService: BsModalService) { }

  ngOnInit(): void {
  }

  hideCart(){
    this.bsModalService.hide(4);
  }

}
