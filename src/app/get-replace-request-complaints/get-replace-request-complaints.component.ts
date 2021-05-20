import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-get-replace-request-complaints',
  templateUrl: './get-replace-request-complaints.component.html',
  styleUrls: ['./get-replace-request-complaints.component.css']
})
export class GetReplaceRequestComplaintsComponent implements OnInit {

  complaints : Complaint[];
  complaint : Complaint;
  constructor(private adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
    this.reloadComplaintData();
  }

  reloadComplaintData(){
    this.adminService.getComplaintsByRequestStatus().subscribe(
      selectedComplaints=>{
        this.complaints=selectedComplaints;
        console.log(selectedComplaints);
      }
    );
  }
  complaintDetails(id : number){
    this.router.navigate(['complaintId',id]);
  }
  replaceEngineer(complaintId : number){
    this.router.navigate(['replace/engineer/complaintId',complaintId]);
  }
  getEngineerDetails(id:number){
    this.router.navigate(['engineer/complaintId',id]);
  }

}
