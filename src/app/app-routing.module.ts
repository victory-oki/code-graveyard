import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicPricingFormComponent } from './dynamic-pricing-form/dynamic-pricing-form.component';
import { OtpFormStyleComponent } from './otp-form-style/otp-form-style.component';


const routes: Routes = [
  {
    path:'otp', component:OtpFormStyleComponent
  },
  {
    path:'dynamic-pricing-form', component:DynamicPricingFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
