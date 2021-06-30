import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../service/http.service'
import { product } from '../../../service/product'
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products : product[];
  classOfProduct = "product-container-horizontal";
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.products = data.filter(prod=>prod.type==="watch"&&prod.typeDetail==="female-watch");
    })
  }

}
