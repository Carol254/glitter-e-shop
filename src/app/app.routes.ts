import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LadiesProductsComponent } from './ladies-products/ladies-products.component';
import { MensProductsComponent } from './mens-products/mens-products.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'shop',component:ShopComponent},
    {path:'all-products',component:AllProductsComponent},
    {path:'ladies-products',component:LadiesProductsComponent},
    {path:'mens-products',component:MensProductsComponent}
];
