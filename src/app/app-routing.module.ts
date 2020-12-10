import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { ClaimComponent } from './claim/claim.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RenewComponent } from './renew/renew.component';

const routes: Routes = [{
path : 'login',
component : LoginComponent
},
{
  path : '',
  component : HomeComponent
},
{
  path : 'register',
  component : RegisterComponent
},
{
  path : 'buy',
  component : BuyComponent
},
{
  path : 'renew',
  component : RenewComponent
},
{
  path : 'claim',
  component : ClaimComponent
},
{
  path : 'estimate',
  component : EstimateComponent
},
{
  path : 'forgotpassword',
  component : ForgotpasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
