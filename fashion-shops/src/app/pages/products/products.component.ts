import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {product} from '../../service/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : product[];
  productsForRender : product[];
  maleWatch : product[];
  femaleWatch : product[];
  productsSuggestion : product[];
  checkFor : number = 0;
  // 1:male,2:female,0:all
  constructor(private http:HttpService ) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data=>{
      this.products = data;
      this.productsForRender =data;
      console.log("products", this.products);
      this.maleWatch = this.products.filter(product=>{
        return product.type==="watch"&& product.typeDetail === "male-watch";
      })
      console.log("male:",this.maleWatch);
      this.femaleWatch = this.products.filter(product=>{
        return product.type==="watch"&& product.typeDetail === "female-watch";
      })
      console.log("male:",this.maleWatch);
      let prS = this.products.filter(product=>{
        return product.isnew===1;
      })
      this.productsSuggestion = [prS[0],prS[1],prS[2],prS[3]];
      console.log("Suugg:",this.productsSuggestion)
    })
  } 
  
  renderMaleWatch(){
    this.productsForRender = this.maleWatch;
    console.log(this.productsForRender);
    this.checkFor = 1;
  }
  renderFemaleWatch(){
    this.productsForRender = this.femaleWatch;
    console.log(this.productsForRender);
    this.checkFor=2;
  }
  renderAll(){
    this.productsForRender = this.products;
    this.checkFor = 0;
  }
  renderFilter1(){
    if(this.checkFor===0){
      this.productsForRender = this.products.filter(prod=>{
        return prod.cost<1000000;
      })
    }else if(this.checkFor===1){
      this.productsForRender = this.maleWatch.filter(prod=>{
        return prod.cost<1000000;
      })
    }
    else{
      this.productsForRender = this.femaleWatch.filter(prod=>{
        return prod.cost<1000000;
      })
    }
  }
  renderFilter2(){
    if(this.checkFor===0){
      this.productsForRender = this.products.filter(prod=>{
        return prod.cost>=1000000 && prod.cost<2500000;
      })
    }else if(this.checkFor===1){
      this.productsForRender = this.maleWatch.filter(prod=>{
        return prod.cost>=1000000 && prod.cost<2500000;
      })
    }
    else{
      this.productsForRender = this.femaleWatch.filter(prod=>{
        return prod.cost>=1000000 && prod.cost<2500000;
      })
    }
  }
  renderFilter3(){
    if(this.checkFor===0){
      this.productsForRender = this.products.filter(prod=>{
        return prod.cost>=2500000 && prod.cost<5000000;
      })      
    }else if(this.checkFor===1){
      this.productsForRender = this.maleWatch.filter(prod=>{
        return prod.cost>=2500000 && prod.cost<5000000;
      }) 
    }
    else{
      this.productsForRender = this.femaleWatch.filter(prod=>{
        return prod.cost>=2500000 && prod.cost<5000000;
      }) 
    }
  }
  renderFilter4(){
    if(this.checkFor===0){
      this.productsForRender = this.products.filter(prod=>{
        return prod.cost>=5000000 && prod.cost<7500000;
      })
    }else if(this.checkFor===1){
      this.productsForRender = this.maleWatch.filter(prod=>{
        return prod.cost>=5000000 && prod.cost<7500000;
      })
    }
    else{
      this.productsForRender = this.femaleWatch.filter(prod=>{
        return prod.cost>=5000000 && prod.cost<7500000;
      })
    }
  }
  renderFilter5(){
    if(this.checkFor===0){
      this.productsForRender = this.products.filter(prod=>{
        return prod.cost>=7500000 && prod.cost<10000000;
      })
    }else if(this.checkFor===1){
      this.productsForRender = this.maleWatch.filter(prod=>{
        return prod.cost>=7500000 && prod.cost<10000000;
      })
    }
    else{
      this.productsForRender = this.femaleWatch.filter(prod=>{
        return prod.cost>=7500000 && prod.cost<10000000;
      })
    }
  }
  renderFilter6(){
    if(this.checkFor===0){
      this.productsForRender = this.products.filter(prod=>{
        return prod.cost>=10000000 && prod.cost<15000000;
      })
    }else if(this.checkFor===1){
      this.productsForRender = this.maleWatch.filter(prod=>{
        return prod.cost>=10000000 && prod.cost<15000000;
      })
    }
    else{
      this.productsForRender = this.femaleWatch.filter(prod=>{
        return prod.cost>=10000000 && prod.cost<15000000;
      })
    }
  }
  renderFilter7(){
    if(this.checkFor===0){
      this.productsForRender = this.products.filter(prod=>{
        return prod.cost>=15000000;
      })
    }else if(this.checkFor===1){
      this.productsForRender = this.maleWatch.filter(prod=>{
        return prod.cost>=15000000;
      })
    }
    else{
      this.productsForRender = this.femaleWatch.filter(prod=>{
        return prod.cost>=15000000;
      })
    }
  }
}
