import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromMember from '../store/member.reducers';
import * as memberActions from '../store/member.actions';
import { StartContactEdit } from '../store/member.actions';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html'
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  @Input() contactDetails: any;
  @Input() contactList: any;

  contactDetailsForm: FormGroup;
  contactDetailsList: Array<any> = new Array<any>();
  subscription: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromMember.MemberState>) { }

  ngOnInit() {
    debugger;
    this.createForm();
  }

  createForm() {
    this.contactDetailsForm = this.formBuilder.group({
      "addressLine1": [""],
      "addressLine2": [""],
      "phoneNumber": [""]
    });

    this.contactDetailsForm.patchValue(this.contactDetails);
  }

  onAddClick() {
    this.store.dispatch(new memberActions.AddContactForm(this.contactDetailsForm.value));
  }

  ngOnDestroy(): void {
    debugger;
    if (this.contactDetailsForm.dirty)
      this.store.dispatch(new memberActions.StartContactEdit(this.contactDetailsForm.value));
  }
}
