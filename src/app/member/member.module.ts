import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MemberComponent } from './member.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { memberReducer } from './store/member.reducers';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: MemberComponent
      },
      {
        path: "search",
        component: SearchDetailsComponent
      }
    ]),
    StoreModule.forFeature("member", memberReducer)
  ],

  declarations: [
    MemberComponent,
    ContactDetailsComponent,
    PersonalDetailsComponent,
    SearchDetailsComponent
  ]
})
export class MemberModule { }
