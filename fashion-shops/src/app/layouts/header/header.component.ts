import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from 'src/app/components/login/login.component';

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
  constructor(private bsModalService: BsModalService) { }

  openLogin() {
    this.bsModalRef = this.bsModalService.show(LoginComponent,{
      class: 'modal-lg  modal-dialog-centered',
    });
  }
  ngOnInit(): void {
  }

}
