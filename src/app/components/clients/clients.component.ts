import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
users: Array<any>;
user: {name: "", lastName: "", email: ""};

  constructor(private clientService: ClientService) {
  
  this.users = this.clientService.clients;
  
  }

  onCreate(){
  this.user = {name: "", lastName: "", email: ""};
  this.action = "create";
}
  onSave(user){
  if (this.action == "edit"){

  }
  if (this.action == "create"){
    this.users.push(user);
  }
}
  onDelete(index){
   this.users.splice(index, 1);
  }
  // agregar una variable para definir la accion de editar
action: string = "default";

// agregar el metodo de editar
onEdit(user){
  this.user = user;
  this.action = "edit";
}


  ngOnInit() {
  }
  }
