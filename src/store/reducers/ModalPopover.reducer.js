export const TOGGLE_MEMBERS = "TOGGLE_MEMBERS";
export const TOGGLE_DELETE = "TOGGLE_DELETE";
export const TOGGLE_EDITAG = "TOGGLE_EDITAG";
export const TOGGLE_CREATETAG = "TOGGLE_CREATETAG";
export const TOGGLE_CALENDAR = "TOGGLE_CALENDAR";
export const TOGGLE_ALL_MODAL = "TOGGLE_ALL_MODAL";

const initialState = {
  buttonMembers: false,
  buttonDelete: false,
  buttonEditag: 0,
  buttonCreatetag: false,
  buttonCalendar: false,
};

export const modalPopoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MEMBERS:
      return {
        ...state,
        buttonMembers: action.payload,
        buttonDelete: false,
        buttonEditag: 0,
        buttonCreatetag: false,
        buttonCalendar: false,
      };
    case TOGGLE_DELETE:
      return {
        ...state,
        buttonMembers: false,
        buttonDelete: action.payload,
        buttonEditag: 0,
        buttonCreatetag: false,
        buttonCalendar: false,
      };
    case TOGGLE_EDITAG:
      return {
        ...state,
        buttonMembers: false,
        buttonDelete: false,
        buttonEditag: action.payload,
        buttonCreatetag: false,
        buttonCalendar: false,
      };
    case TOGGLE_CREATETAG:
      return {
        ...state,
        buttonMembers: false,
        buttonDelete: false,
        buttonEditag: 0,
        buttonCreatetag: action.payload,
        buttonCalendar: false,
      };
    case TOGGLE_CALENDAR:
      return {
        ...state,
        buttonMembers: false,
        buttonDelete: false,
        buttonEditag: 0,
        buttonCreatetag: false,
        buttonCalendar: action.payload,
      };
    case TOGGLE_ALL_MODAL:
      return {
        initialState,
      };

    default:
      return state;
  }
};
