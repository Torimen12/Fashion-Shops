import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { SelectionsComponent } from './selections/selections.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FeedBackComponent } from './feed-back/feed-back.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SelectionsComponent,
    NewProductsComponent,
    AboutUsComponent,
    ListProductsComponent,
    FeedBackComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [HomeComponent],
})
export class HomeModule { }
