import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client/client.service';
import { InventoryService } from '../../../services/inventory/inventory.service';
@Component({
  selector: 'app-sales-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
users: Array<any>;
user: {name: "", lastName: "", email: ""};

items: Array<any>;

item: {id: "", name: "", brand: "", provider: "", quantity: "", price: ""};

  constructor(private clientService: ClientService, private inventoryService: InventoryService) {
  
  this.users = this.clientService.clients;
  this.items = this.inventoryService.items;
  }

  ngOnInit() {
  }

}
