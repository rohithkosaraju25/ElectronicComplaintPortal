import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
// import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-change-complaint-status',
  templateUrl: './change-complaint-status.component.html',
  styleUrls: ['./change-complaint-status.component.css']
})
export class ChangeComplaintStatusComponent implements OnInit {
  statusList:any = ['CLOSED']
  complaint : Complaint = new Complaint();
  complaintId : number;
  submitted = false;
  status : string;
  custStatus : FormControl;
  changeStatusForm : FormGroup;
  
  constructor(private router:Router,private route:ActivatedRoute,private complaintService :ComplaintService) { }
  ngOnInit(): void {
     this.complaint = new Complaint();
     this.complaintId = this.route.snapshot.params['complaintId'];
     this.custStatus = new FormControl();
     this.changeStatusForm = new FormGroup({
       'status':this.custStatus
     });
     this.complaintService.getComplaintByComplaintId(this.complaintId).
     subscribe(selectedComplaint=>{
        console.log(selectedComplaint);
      this.complaint = selectedComplaint;
     },error=>console.log(error)); 
}

changeStatus(status : string){
 console.log(this.complaintId);
 console.log(status);
  this.complaintService.changeComplaintStatus(this.complaintId,status).subscribe(
    complaint => {
      this.complaint= complaint;
      this.goToComplaintDetails(this.complaint.complaintId);
      
    }, error => console.log(error)
  ); 
}
goToComplaintDetails(complaintId:number){
  this.router.navigate(['complaintId',complaintId]);
}

submit(){
  console.log("form value",this.changeStatusForm.value);
  console.log(this.custStatus);
  this.changeStatus(this.changeStatusForm.value);

   }
}

// ngOnInit(): void {
//   this.complaint = new Complaint();
//   this.complaintId = this.route.snapshot.params['complaintId'];
//   this.complaintService.getComplaintByComplaintId(this.complaintId).
//   subscribe(selectedComplaint=>{
//      console.log(selectedComplaint);
//    this.complaint = selectedComplaint;
//   },error=>console.log(error)); 
// }

// changeStatus(status:string){
// console.log(this.complaintId);
// console.log(this.status);
// status = this.status;
// this.complaintService.changeComplaintStatus(this.complaintId,status).subscribe(
//  complaint => {
//    this.complaint= complaint;
//    this.goToComplaintDetails(this.complaint.complaintId);
   
//  }, error => console.log(error)
// ); 
// }
// goToComplaintDetails(complaintId:number){
// this.router.navigate(['complaintId',complaintId]);
// }

// onSubmit(data: string){
// this.submitted=true;
// this.status = data;
// console.log(data);
// this.changeStatus(data['status']);

// }