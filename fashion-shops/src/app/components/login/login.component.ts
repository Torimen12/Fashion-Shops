import { Component, OnInit } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  bsModalRef : BsModalRef;
  isSubmitted =true;
  id : number;
  constructor(private bsModalService: BsModalService) { 
  }

  ngOnInit(): void {
    this.bsModalService.onShown.subscribe(data=>{
      this.id = data.id;
      console.log(this.id)
    })
  }
  openRegister() { 
    // this.bsModalService._hideModal(this.id);
    this.bsModalService._showBackdrop();
    this.bsModalService.hide(1);
    this.bsModalRef = this.bsModalService.show(RegisterComponent,{
      class: 'modal-lg  modal-dialog-centered',
      id : 2,
    });
  }
  submit(){
    return this.isSubmitted;
  }
}
