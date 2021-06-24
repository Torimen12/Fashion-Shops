import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  bsModalRef : BsModalRef;
  isSubmitted =false;
  constructor(private bsModalService: BsModalService) { }

  ngOnInit(): void {
  }
  openRegister() { 
    // this.isSubmitted =  true; 
  }
  open(){
    this.bsModalRef =  this.bsModalService.show(RegisterComponent,{
      class: 'modal-lg  modal-dialog-centered',
    });
  }
  hide(){
    this.bsModalService.hide();
  }
  submit(){
    return this.isSubmitted;
  }
}
