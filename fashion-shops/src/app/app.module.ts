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


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FootterComponent,
    BannerComponent,
    HomeComponent
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
