import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../models/complaint';
import { Product } from '../models/product';

@Component({
  selector: 'app-get-product-by-complaint-id',
  templateUrl: './get-product-by-complaint-id.component.html',
  styleUrls: ['./get-product-by-complaint-id.component.css']
})
export class GetProductByComplaintIdComponent implements OnInit {
  complaintId : number;
  complaint : Complaint;
  product : Product;

  constructor(private complaintService : ComplaintService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.complaintId = this.route.snapshot.params['complaintId'];
    this.complaintService.getProductByComplaintId(this.complaintId).subscribe(
      selectedProduct => {
        console.log(selectedProduct);
        this.product=selectedProduct;
      },error => console.log(error)
    );
  }

}
