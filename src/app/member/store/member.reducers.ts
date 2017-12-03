import * as MemberActions from "./member.actions";
import { actions, ADD_CONTACT_FORM } from './member.actions';

export interface MemberState {
  member: State;
}

export interface State {
  personalformState: any;
  contactformState: any;
  memberList: any;
}

const initialState: MemberState = {
  member: {
    personalformState: {
      firstName: "",
      lastName: "",
      gender: ""
    },
    contactformState: {
      addressLine1: "",
      addressLine2: "",
      phoneNumber: ""
    },
    memberList: {
      personalList: [],
      contactList: []
    }
  }
}

export function memberReducer(state = initialState, action: MemberActions.actions) {

  switch (action.type) {

    case (MemberActions.INIT_PERSONAL_FORM): {
      debugger;
      return {
        ...state,
        member: Object.assign({}, state.member, { personalformState: action.payload })
      }
    }
    case (MemberActions.START_PERSONAL_EDIT):
      debugger;
      return {
        ...state,
        member: Object.assign({}, state.member, { personalformState: action.payload })

      };
    case (MemberActions.START_CONTACT_EDIT): {
      debugger;
      return {
        ...state,
        member: Object.assign({}, state.member, { contactformState: action.payload })
      }
    }
    case (MemberActions.ADD_PERSONAL_FORM): {
      debugger;
      const updatedList = [...state.member.memberList.personalList, ...action.payload];
      return {
        ...state,
        member: Object.assign({}, state.member,
          {
            memberList: Object.assign({}, state.member.memberList, {
              personalList: updatedList
            })
          })
      }
    }

    case (MemberActions.ADD_CONTACT_FORM): {
      debugger;

      const updatedList = [...state.member.memberList.contactList, ...action.payload];

      return {
        ...state,
        member: Object.assign({}, state.member, {
          memberList: Object.assign({}, state.member.memberList, {
            contactList: updatedList
          })
        })
      }
    }

    default:
      return state;
  }
}
