import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client : Client;
  clientId : string;
  constructor(private clientService : ClientService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.client = new Client();
    this.clientId = this.route.snapshot.params['clientId'];
    this.clientService.getClientByCLientId(this.clientId).subscribe(
      selectedClient =>{
        this.client=selectedClient;
        console.log(this.client);
      },error=>console.log(error)
    );
  }

}
