import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import {HttpService} from '../../../service/http.service';
import{product} from '../../../service/product'

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  productsNew : product[];
  classOfProduct:string ="product-container-vertical" ;
  constructor(private http : HttpService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.productsNew = data.filter(product=>product.isnew===1);
      console.log(this.productsNew);
    })
  }

}
