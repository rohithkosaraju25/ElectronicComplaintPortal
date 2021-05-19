import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  clientId : string;
  password : string;
  client : Client;
  submitted = false;
  constructor(private clientService : ClientService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.client = new Client();
  }
  clientSignIn(){
    console.log(this.client.clientId);
    this.clientService.signIn(this.client.clientId,this.client.password).subscribe(
      result=>{
        console.log(result);
        this.goToClientHomePage(this.clientId);
        console.log("home");
      },error =>{console.log(error)}
    );
  }
  goToClientHomePage(id:string){
    console.log("reaching though");
    id = this.client.clientId;
    console.log(id);
    this.router.navigate(['clientHome',id])
  }
  onSubmit(){
    this.submitted = true;
    this.clientSignIn();
  }

}
