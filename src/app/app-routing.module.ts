import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddListingComponent } from './add-listing/add-listing.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',redirectTo:"landing", pathMatch:"full"},
  {path:'landing', component: LandingComponent},
  {path:'addListing', component: AddListingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
