import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { contactList } from '../models/Todo';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  listofContact: contactList[]=[];
  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {
   if(localStorage.getItem('list')){
    this.listofContact=JSON.parse(localStorage.getItem('list'));
   }
  }
  public openDialog(contact?:contactList):void{
    const dialogRef = this.dialog.open(AddContactComponent, {
    
      width: '400px',
      data:contact
    });
    const instance = dialogRef.componentInstance;
    instance.submitAction.subscribe((objValues) => {
     dialogRef.close();
      if(contact){
       
        const index = this.listofContact.indexOf(contact);
        this.listofContact[index]= objValues;
        localStorage.setItem('list', JSON.stringify(this.listofContact));
        return
        
      }
     this.listofContact.push(objValues);
     localStorage.setItem('list', JSON.stringify(this.listofContact));
    });
  }

  public onDelete(index:number):void{
    this.listofContact.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(this.listofContact));
   }


}
