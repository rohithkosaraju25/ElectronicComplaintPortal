import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.css']
})
export class ClientHomePageComponent implements OnInit {

  clientId : string;
  complaint :Complaint;
  product : Product;
  products : Product[];
  complaints : Complaint[];
  constructor(private route:ActivatedRoute,private router : Router,private complaintService : ComplaintService,private productService :ProductService) { }

  ngOnInit(): void {
    this.complaint = new Complaint();
    this.product= new Product();
    this.clientId = this.route.snapshot.params['clientId'];
    console.log(this.clientId);
    this.reloadComplaintData();
    this.reloadProductData();
  }

  reloadComplaintData() {
    this.complaintService.getClientAllComplaints(this.clientId).subscribe(
      complaints => {
        this.complaints = complaints;
      }
    );
  }
  reloadProductData(){
    this.productService.getProductsByClientId(this.clientId).subscribe(
      products=>{
        this.products=products;
      }
    );
  }
  goToActiveComplaints(){
    console.log(this.clientId);
    this.router.navigate(['active/client',this.clientId]);
  }
  goTobookComplaint(){
    this.router.navigate(['bookComplaint']);
  }

  goToAllComplaints(){
    this.router.navigate(['client',this.clientId]);
  }
  goToAllproducts(){
    this.router.navigate(['clientId',this.clientId]);
  }
  goToHomePage(){
    alert('Logging out');
    this.router.navigate['home'];
  }

  complaintDetails(id : number){
    this.router.navigate(['complaintId',id])
  }

  productDetails(modelNumber : string){
    this.router.navigate(['modelNumber',modelNumber]);
  }

  goToClientDetails(){
    this.router.navigate(['details/clientId',this.clientId]);
  }

  goToAllOpenComplaints(){
    this.router.navigate(['open/client',this.clientId]);
  }
  goToRequestComplaints(){
    this.router.navigate(['active/client',this.clientId]);
  }
  goToRequestStatus(){
    this.router.navigate(['requested/replacement/client',this.clientId]);
  }
  goToResolvedComplaints(){
    this.router.navigate(['resolved/client',this.clientId]);
  }
  goToonGoingComplaints(){
    this.router.navigate(['onGoing/client',this.clientId]);
  }
}
