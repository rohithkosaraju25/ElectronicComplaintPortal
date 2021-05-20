import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-replace-engineer',
  templateUrl: './replace-engineer.component.html',
  styleUrls: ['./replace-engineer.component.css']
})
export class ReplaceEngineerComponent implements OnInit {

  complaint : Complaint;
  complaintId : number;
  constructor(private adminService : AdminService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.complaint = new Complaint();
    this.complaintId = this.route.snapshot.params['complaintId'];
    this.replaceEngineer();
  }

  replaceEngineer(){
    this.adminService.replaceEngineerFromComplaint(this.complaintId).subscribe(
      updatedComplaint =>{
        this.complaint = updatedComplaint;
        console.log(updatedComplaint);
      }
    );
  }

  goToComplaintDetails(){
      this.router.navigate(['complaintId',this.complaintId]);
  }

}
