import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import * as fromMember from '../store/member.reducers';
import * as memberActions from '../store/member.actions';

@Component({
  selector: 'personal-details',
  templateUrl: './personal-details.component.html'
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {

  @Input() personalDetails: any;
  @Input() personalList: any;

  personalDetailsForm: FormGroup;
  details: any;
  personalDetailsList: Array<any> = new Array<any>();
  subscription: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<fromMember.MemberState>) { }

  ngOnInit() {
    debugger;
    this.createForm();
  }

  onRedirect() {
    debugger;
    this.router.navigate(['/member/search']);
  }

  createForm() {
    this.personalDetailsForm = this.formBuilder.group({
      "firstName": [""],
      "lastName": [""],
      "gender": [""]
    });

    this.personalDetailsForm.patchValue(this.personalDetails);
  }

  onAddClick() {
    this.store.dispatch(new memberActions.AddPersonalForm(this.personalDetailsForm.value));
    // this.personalDetailsList.push(this.personalDetailsForm.value);
    // this.personalDetailsForm.reset();
  }

  ngOnDestroy(): void {
    debugger;
    if (this.personalDetailsForm.dirty)
      this.store.dispatch(new memberActions.StartPersonalEdit(this.personalDetailsForm.value));
  }
}
