import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { EmptyCartComponent } from 'src/app/components/empty-cart/empty-cart.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faSearch = faSearch;
  faCart = faCartPlus;
  bsModalRef: BsModalRef;
  myStorage = window.localStorage;
  constructor(private bsModalService: BsModalService, private cartService: CartService) { }

  openLogin() {
    this.bsModalRef = this.bsModalService.show(LoginComponent,{
      class: 'modal-lg  modal-dialog-centered',
      id: 1
    });
  }

  openCart(){
    if(this.cartService.cart.length>0){
      this.bsModalRef = this.bsModalService.show(CartComponent,{
        class:'modal-xl modal-dialog-centered',
        id:3
      })      
    }
    else{
      this.bsModalRef = this.bsModalService.show(EmptyCartComponent,{
        class:'modal-xl modal-dialog-centered',
        id:4
      })
    }
  }
  ngOnInit(): void {
  }

}
