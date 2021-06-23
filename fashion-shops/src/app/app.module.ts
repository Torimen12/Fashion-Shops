import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './layouts/container/container.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FootterComponent } from './layouts/footter/footter.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './pages/home/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import {SelectionsComponent} from './pages/home/selections/selections.component';
import { ProductComponent } from './components/product/product.component';
import { NewProductsComponent } from './pages/home/new-products/new-products.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { ListProductsComponent } from './pages/home/list-products/list-products.component';
import { FeedBackComponent } from './pages/home/feed-back/feed-back.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FootterComponent,
    BannerComponent,
    HomeComponent,
    SelectionsComponent,
    ProductComponent,
    NewProductsComponent,
    AboutUsComponent,
    ListProductsComponent,
    FeedBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
