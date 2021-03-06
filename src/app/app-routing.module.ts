import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookComplaintComponent } from './book-complaint/book-complaint.component';
import { ChangeComplaintStatusComponent } from './change-complaint-status/change-complaint-status.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { ContactComponent } from './contact/contact.component';
import { EngineerLoginComponent } from './engineer-login/engineer-login.component';
import { GetClientActiveCompalintsComponent } from './get-client-active-compalints/get-client-active-compalints.component';
import { GetClientAllComplaintsComponent } from './get-client-all-complaints/get-client-all-complaints.component';
import { GetClientAllOpenComplaintsComponent } from './get-client-all-open-complaints/get-client-all-open-complaints.component';
import { GetClientOnGoingComplaintsComponent } from './get-client-on-going-complaints/get-client-on-going-complaints.component';
import { GetClientReplacementRequestComplaintsComponent } from './get-client-replacement-request-complaints/get-client-replacement-request-complaints.component';
import { GetClientResolvedComplaintsComponent } from './get-client-resolved-complaints/get-client-resolved-complaints.component';
import { GetEngineerByComplaintIdComponent } from './get-engineer-by-complaint-id/get-engineer-by-complaint-id.component';
import { GetProductByClientIdComponent } from './get-product-by-client-id/get-product-by-client-id.component';
import { GetProductByComplaintIdComponent } from './get-product-by-complaint-id/get-product-by-complaint-id.component';
import { GetReplaceRequestComplaintsComponent } from './get-replace-request-complaints/get-replace-request-complaints.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReplaceEngineerComponent } from './replace-engineer/replace-engineer.component';
import { RequestToReplaceComponent } from './request-to-replace/request-to-replace.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path : '',redirectTo : 'home',pathMatch : 'full'},
  {path: 'service',component:ServiceComponent},
  {path: 'about',component:AboutComponent},
  {path: 'team',component:TeamComponent},
  {path :'contact',component : ContactComponent},
  {path : 'adminLogin',component : AdminLoginComponent},
  {path : 'clientLogin',component : ClientLoginComponent},
  {path : 'engineerLogin',component : EngineerLoginComponent},
  {path : 'bookComplaint',component : BookComplaintComponent},
  {path : 'changeStatus/:complaintId',component:ChangeComplaintStatusComponent},
  {path : 'client/:clientId',component : GetClientAllComplaintsComponent},
  {path : 'open/client/:clientId',component : GetClientAllOpenComplaintsComponent},
  {path : 'engineer/complaintId/:complaintId',component:GetEngineerByComplaintIdComponent},
  {path : 'product/complaintId/:complaintId',component:GetProductByComplaintIdComponent},
  {path : 'complaintId/:complaintId',component:ComplaintDetailsComponent},
  {path:  'active/client/:clientId',component:GetClientActiveCompalintsComponent},
  {path : 'clientSignIn',component:ClientLoginComponent},
  {path : 'clientHome/:clientId',component:ClientHomePageComponent},
  {path : 'clientId/:clientId',component:GetProductByClientIdComponent},
  {path : 'modelNumber/:modelNumber',component:ProductDetailsComponent},
  {path : 'requestedForReplacement',component:GetReplaceRequestComplaintsComponent},
  {path : 'replace/engineer/complaintId/:complaintId',component:ReplaceEngineerComponent},
  {path : 'details/clientId/:clientId',component:ClientDetailsComponent},
  {path : 'requestStatus/:complaintId',component:RequestToReplaceComponent},
  {path : 'requested/replacement/client/:clientId',component:GetClientReplacementRequestComplaintsComponent},
  {path : 'resolved/client/:clientId',component:GetClientResolvedComplaintsComponent},
  {path : 'onGoing/client/:clientId',component:GetClientOnGoingComplaintsComponent},
  {path : 'addProduct',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
