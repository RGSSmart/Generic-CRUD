import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DATA, deleteById, updateEntityNameById } from '../db';
import { Entity } from '../entity';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.css']
})
export class AddEntityComponent implements OnInit {

  nameControl = new FormControl('');
  item_list = DATA;
  novi_id = 1;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  CanSubmit() {
    if (this.nameControl.value != "") {
      return false;
    } else {
      return true;
    }
  }

  Add() {

    let newEntity = new Entity(this.nameControl.value);
    newEntity.id = this.novi_id++;
    DATA.push(newEntity);
    this.item_list = DATA;

  }
  Delete(id: number) {
    this.item_list = deleteById(id);
    console.log(id)
  }
  entityName= new FormControl('');
  
  Update(content: any, item: Entity) {
    this.entityName.setValue(item.name);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    
      this.item_list = updateEntityNameById(item.id, this.entityName.value);
    }, (reason) => {
      
    });
   }
 
}
