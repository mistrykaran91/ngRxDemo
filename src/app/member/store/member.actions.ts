import { Action } from '@ngrx/store';

export const START_PERSONAL_EDIT = "START_PERSONAL_EDIT";
export const START_CONTACT_EDIT = "START_CONTACT_EDIT";
export const INIT_PERSONAL_FORM = "INIT_PERSONAL_FORM";
export const ADD_PERSONAL_FORM = "ADD_PERSONAL_FORM";
export const ADD_CONTACT_FORM = "ADD_CONTACT_FORM";


export class InitPersonalForm implements Action {
  readonly type = INIT_PERSONAL_FORM;

  constructor(public payload: any) { }
}

export class StartPersonalEdit implements Action {
  readonly type = START_PERSONAL_EDIT;

  constructor(public payload: any) { }
}

export class StartContactEdit implements Action {
  readonly type = START_CONTACT_EDIT;

  constructor(public payload: any) { }
}

export class AddPersonalForm implements Action {

  readonly type = ADD_PERSONAL_FORM;

  constructor(public payload: any) { }
}

export class AddContactForm implements Action {
  readonly type = ADD_CONTACT_FORM;

  constructor(public payload: any) { }
}

export type actions =
  StartPersonalEdit |
  StartContactEdit |
  InitPersonalForm |
  AddPersonalForm |
  AddContactForm;
