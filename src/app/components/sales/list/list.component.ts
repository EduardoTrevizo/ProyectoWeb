import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales/sales.service';
 
@Component({
  selector: 'app-sales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

sales: Array<any>;

sale: {
    order: "", date: "", total: "", client: { name: "", lastname: "", email: ""}, address: {street: "", city: "", zip: ""}, items: {id: "", name: "", brand: "", provider: "", quantity: "", price: ""};
}
  constructor(service:SalesService) {
  this.sales= service.sales;
  }

  ngOnInit() {
  }

}
