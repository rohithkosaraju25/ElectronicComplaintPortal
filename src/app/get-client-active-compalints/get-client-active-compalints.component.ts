import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-get-client-active-compalints',
  templateUrl: './get-client-active-compalints.component.html',
  styleUrls: ['./get-client-active-compalints.component.css']
})
export class GetClientActiveCompalintsComponent implements OnInit {

  clientId : string;
  complaints : Complaint[];
  constructor(private complaintService:ComplaintService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.clientId = this.route.snapshot.params['clientId'];
    this.complaintService.getClientActiveComplaints(this.clientId).subscribe(
      complaints => {
        this.complaints = complaints
      }
    );
  }//reload close

  complaintDetails(id : number){
    this.router.navigate(['complaintId',id])
  }
  
  changeStatus(id : number){
    console.log("active",id);
    this.router.navigate(['changeStatus',id])
  }

  getEngineerDetails(id:number){
    this.router.navigate(['engineer/complaintId',id])
  }

}
