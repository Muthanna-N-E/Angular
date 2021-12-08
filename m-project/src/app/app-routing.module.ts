import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CasualShoesComponent } from './products/casual-shoes/casual-shoes.component';
import { FormalsShoesComponent } from './products/formals-shoes/formals-shoes.component';
import { ProductsComponent } from './products/products.component';
import { SportsShoesComponent } from './products/sports-shoes/sports-shoes.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'casual-shoes',component:CasualShoesComponent},
    {path:'sports-shoes',component:SportsShoesComponent},
    {path:'formals-shoes',component:FormalsShoesComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
