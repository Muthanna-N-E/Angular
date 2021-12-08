import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CasualShoesComponent } from './products/casual-shoes/casual-shoes.component';
import { SportsShoesComponent } from './products/sports-shoes/sports-shoes.component';
import { FormalsShoesComponent } from './products/formals-shoes/formals-shoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    CasualShoesComponent,
    SportsShoesComponent,
    FormalsShoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
