import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-get-client-all-open-complaints',
  templateUrl: './get-client-all-open-complaints.component.html',
  styleUrls: ['./get-client-all-open-complaints.component.css']
})
export class GetClientAllOpenComplaintsComponent implements OnInit {
  clientId : string;
  complaints : Complaint[];
  constructor(private complaintService:ComplaintService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.clientId = this.route.snapshot.params['clientId'];
    this.complaintService.getClientAllOpenComplaints(this.clientId).subscribe(
      complaints => {
        this.complaints = complaints
      }
    );
  }//reload close

  complaintDetails(id : number){
    this.router.navigate(['complaintId',id])
  }
  
  replaceEngineer(complaintId : number){ //need to be implemented

  }

  getEngineerDetails(id:number){
    this.router.navigate(['engineer/complaintId',id])
  }
}
