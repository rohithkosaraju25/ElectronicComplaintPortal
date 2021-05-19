import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-get-product-by-client-id',
  templateUrl: './get-product-by-client-id.component.html',
  styleUrls: ['./get-product-by-client-id.component.css']
})
export class GetProductByClientIdComponent implements OnInit {

  products :  Product[];
  clientId : string;
  constructor(private productService : ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['clientId'];
    console.log(this.clientId);
    this.reloadProductData();
  }

  reloadProductData(){
    this.productService.getProductsByClientId(this.clientId).subscribe(
      products =>{
        this.products=products;
      }
    );
  }
  productDetails(modelNumber : string){
    this.router.navigate(['modelNumber',modelNumber]);
  }
  
}
