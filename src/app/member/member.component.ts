import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMember from './store/member.reducers';

@Component({
  templateUrl: './member.component.html'
})
export class MemberComponent implements OnInit, OnDestroy {
  
  mainForm: FormGroup;
  member$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromMember.MemberState>) { }

  ngOnInit() {
    debugger;
    this.member$ = this.store.select("member");

    this.store.select("member").subscribe(data=>{
      debugger;

    }).unsubscribe();

    this.createForm();
  }

  createForm() {
    this.mainForm = this.formBuilder.group({
      "personalDetails": this.formBuilder.array([]),
      "contactDetails": this.formBuilder.array([])
    });
  }

  ngOnDestroy(): void {
    
  }

}
