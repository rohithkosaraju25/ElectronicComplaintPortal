import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-get-client-replacement-request-complaints',
  templateUrl: './get-client-replacement-request-complaints.component.html',
  styleUrls: ['./get-client-replacement-request-complaints.component.css']
})
export class GetClientReplacementRequestComplaintsComponent implements OnInit {

  complaints:Complaint[];
  complaint : Complaint;
  complaintId : number;
  clientId : string;
  constructor(private complaintService:ComplaintService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.complaint=new Complaint();
    this.clientId=this.route.snapshot.params['clientId'];
    this.complaintService.getClientRequestedForReplacementComplaints(this.clientId).subscribe(
      selectedComplaints=>{
        console.log(selectedComplaints);
        this.complaints=selectedComplaints;
      }
    );
  }
  complaintDetails(id : number){
    this.router.navigate(['complaintId',id]);
  }
  getEngineerDetails(id:number){
    this.router.navigate(['engineer/complaintId',id]);
  }

}
