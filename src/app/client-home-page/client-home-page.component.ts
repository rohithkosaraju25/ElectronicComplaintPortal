import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.css']
})
export class ClientHomePageComponent implements OnInit {

  clientId : string;
  complaint :Complaint;
  complaints : Complaint[];
  constructor(private route:ActivatedRoute,private router : Router,private complaintService : ComplaintService) { }

  ngOnInit(): void {
    this.complaint = new Complaint();
    this.clientId = this.route.snapshot.params['clientId'];
    console.log(this.clientId);
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.complaintService.getClientAllComplaints(this.clientId).subscribe(
      complaints => {
        this.complaints = complaints
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

  }
  goToHomePage(){
    alert('Logging out');
    this.router.navigate['home'];
  }

  complaintDetails(id : number){
    this.router.navigate(['complaintId',id])
  }

}
