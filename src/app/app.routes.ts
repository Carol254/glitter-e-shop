import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LadiesProductsComponent } from './ladies-products/ladies-products.component';
import { MensProductsComponent } from './mens-products/mens-products.component';
import { LadiesWatchesComponent } from './ladies-watches/ladies-watches.component';
import { LadiesNecklacesComponent } from './ladies-necklaces/ladies-necklaces.component';
import { LadiesRingsComponent } from './ladies-rings/ladies-rings.component';
import { LadiesEarringsComponent } from './ladies-earrings/ladies-earrings.component';
import { LadiesBraceletsComponent } from './ladies-bracelets/ladies-bracelets.component';
import { AllLadiesProductsComponent } from './all-ladies-products/all-ladies-products.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'shop',component:ShopComponent},
    {path:'all-products',component:AllProductsComponent},
    {path:'ladies',component:LadiesProductsComponent,
        children:[
            {path:'',component:AllLadiesProductsComponent},
            {path:'watches',component:LadiesWatchesComponent},
            {path:'necklaces',component:LadiesNecklacesComponent},
            {path:'rings',component:LadiesRingsComponent},
            {path:'earrings',component:LadiesEarringsComponent},
            {path:'bracelets',component:LadiesBraceletsComponent},
        ]
    },
    {path:'mens-products',component:MensProductsComponent},
    {path:'product-details',component:DetailsPageComponent},
    {path:'cart',component:CartComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
];
