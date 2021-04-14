import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { contactList } from '../models/Todo';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public submitted: boolean;
  private contact_List = new contactList();
  public listForm: FormGroup;
  @Output() submitAction = new EventEmitter();
  get f() { return this.listForm.controls; }

  constructor(private formBuilder: FormBuilder,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data){
      this.contact_List=this.data;
    }
    this.initilizeForm();
  }

  initilizeForm() {
    this.listForm = this.formBuilder.group({
      name: [this.contact_List.name || '', Validators.required],
      ContactNo: [this.contact_List.ContactNo || null, [Validators.required ]]
    });
  }

  onSubmite(){
    this.submitted = true;
    if(this.listForm.valid){
     
      this.submitAction.emit(this.listForm.value);
    }
  }

 
}
