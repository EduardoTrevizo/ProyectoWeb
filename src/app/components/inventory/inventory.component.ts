import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
items: Array<any>;

item: {id: "", name: "", brand: "", provider: "", quantity: "", price: ""};
action: string = "default";


  constructor(private inventoryService: InventoryService) {
  
  this.items = this.inventoryService.items;
}


  ngOnInit() {
  this.onFind();
  }
  
  onFind(){
  this.inventoryService.find().subscribe((res:any) => {
    this.items = res.body;
 });
}
    onEdit(item){
      this.item = item;
      this.action = "edit";
    }
  updateproducts(search){
    console.log(search);
        this.inventoryService.findbyname(search).subscribe((res:any) => {
        this.items = res.body;
        console.log(res.body);});
      }
    }
    onCreate(){
      this.item = {id: "", name: "", brand: "", provider: "", quantity: "", price: ""};
      this.action = "create";
    }
    onSave(user){
      if (this.action == "edit"){
        this.inventoryService.updateOne(user).subscribe((res:any) => {
          this.onFind();
        });
      }
      if (this.action == "create"){
        this.inventoryService.insertOne(user).subscribe((res:any) => {
          this.onFind();
        });
      }
    }

    onDelete(id){
      this.inventoryService.deleteOne(id).subscribe((res:any) => {
        this.onFind();
      });
    }
    }
