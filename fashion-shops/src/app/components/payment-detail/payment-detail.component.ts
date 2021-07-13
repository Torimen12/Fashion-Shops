import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {
  now = Date.now();
  constructor() { }

  ngOnInit(): void {
    
  }

}
