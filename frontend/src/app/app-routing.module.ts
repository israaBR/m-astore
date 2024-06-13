import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumPageComponent } from './components/pages/parfum-page/parfum-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { OrderItemsListComponent } from './components/partial/order-items-list/order-items-list.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { AllOrdersPageComponent } from './components/pages/all-orders-page/all-orders-page.component';//new

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'parfum/:id', component: ParfumPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'orders', component: AllOrdersPageComponent },//new
  {
    path: 'track/:orderId',
    component: OrderTrackPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
