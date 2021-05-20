import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-request-to-replace',
  templateUrl: './request-to-replace.component.html',
  styleUrls: ['./request-to-replace.component.css']
})
export class RequestToReplaceComponent implements OnInit {

  complaints : Complaint[];
  complaint : Complaint;
  clientId : string;
  complaintId : number;
  constructor(private complaintService:ComplaintService,private route:ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
    this.complaint=new Complaint();
    this.complaintId=this.route.snapshot.params['complaintId'];
    this.complaintService.requestForReplacementOfEngineer(this.complaintId).subscribe(
      selectedComplaint=>{
        this.complaint=selectedComplaint;
        console.log(this.complaint);
      },error=>console.log(error)
    );
    }
  goToRequestedComplaints(){
    this.router.navigate(['requested/replacement/client',this.complaint.clientId]);
  }

}
