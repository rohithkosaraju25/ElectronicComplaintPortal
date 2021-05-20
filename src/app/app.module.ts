import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplaintService } from './complaint.service';
import { BookComplaintComponent } from './book-complaint/book-complaint.component';
import { ChangeComplaintStatusComponent } from './change-complaint-status/change-complaint-status.component';
import { GetClientAllComplaintsComponent } from './get-client-all-complaints/get-client-all-complaints.component';
import { GetClientAllOpenComplaintsComponent } from './get-client-all-open-complaints/get-client-all-open-complaints.component';
import { GetEngineerByComplaintIdComponent } from './get-engineer-by-complaint-id/get-engineer-by-complaint-id.component';
import { GetProductByComplaintIdComponent } from './get-product-by-complaint-id/get-product-by-complaint-id.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { GetClientActiveCompalintsComponent } from './get-client-active-compalints/get-client-active-compalints.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { EngineerLoginComponent } from './engineer-login/engineer-login.component';
import { ClientService } from './client.service';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { GetProductByClientIdComponent } from './get-product-by-client-id/get-product-by-client-id.component';
import { ProductService } from './product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComplaintComponent,
    ChangeComplaintStatusComponent,
    GetClientAllComplaintsComponent,
    GetClientAllOpenComplaintsComponent,
    GetEngineerByComplaintIdComponent,
    GetProductByComplaintIdComponent,
    ComplaintDetailsComponent,
    GetClientActiveCompalintsComponent,
    HomepageComponent,
    ServiceComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    AdminLoginComponent,
    ClientLoginComponent,
    EngineerLoginComponent,
    ClientHomePageComponent,
    GetProductByClientIdComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule   
  ],
  providers: [ComplaintService,ClientService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
