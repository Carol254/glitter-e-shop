import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AllProductsComponent } from './all-products/all-products.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'shop',component:ShopComponent},
    {path:'all-products',component:AllProductsComponent}
];
