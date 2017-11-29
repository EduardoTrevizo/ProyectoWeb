import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

order: Array<any>;
  constructor(private salesService: SalesService) {}

  ngOnInit() {
        
    this.order = this.salesService.sales;
  }

}
