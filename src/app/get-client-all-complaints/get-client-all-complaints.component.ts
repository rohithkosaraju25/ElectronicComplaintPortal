import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-get-client-all-complaints',
  templateUrl: './get-client-all-complaints.component.html',
  styleUrls: ['./get-client-all-complaints.component.css']
})
export class GetClientAllComplaintsComponent implements OnInit {

  clientId : string;
  complaints : Complaint[];
  constructor(private complaintService:ComplaintService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.clientId = this.route.snapshot.params['clientId'];
    this.complaintService.getClientAllComplaints(this.clientId).subscribe(
      complaints => {
        this.complaints = complaints
      }
    );
  }//reload close

  complaintDetails(id : number){
    this.router.navigate(['complaintId',id])
  }
  
  changeStatus(id :number,status:string){
    this.router.navigate(['changeStatus',id,status])
  }

  getEngineerDetails(id:number){
    this.router.navigate(['engineer/complaintId',id])
  }


}
