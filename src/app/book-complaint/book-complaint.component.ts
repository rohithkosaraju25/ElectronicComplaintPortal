import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';

@Component({
  selector: 'app-book-complaint',
  templateUrl: './book-complaint.component.html',
  styleUrls: ['./book-complaint.component.css']
})
export class BookComplaintComponent implements OnInit {

  complaint : Complaint = new Complaint();
  complaintId : number;
  submitted = false;
  constructor(private complaintService : ComplaintService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  bookComplaint() : void {
    this.complaintService.bookComplaint(this.complaint).subscribe(
      complaint => {
        this.complaint=complaint;
        this.goToComplaintDetails(this.complaint.complaintId);
        
      }, error => console.log(error)
    );
  }
  goToComplaintDetails(complaintId:number){
    this.router.navigate(['complaintId',complaintId]);
  }
  
  onSubmit(){
    this.submitted=true;
    this.bookComplaint();

  }
}
