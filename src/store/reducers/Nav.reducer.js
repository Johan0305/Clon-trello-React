export const TOGGLE_RECENT = "TOGGLE_RECENT";
export const TOGGLE_MARK = "TOGGLE_MARK";
export const TOGGLE_CREATE = "TOGGLE_CREATE";
export const TOGGLE_NOTIFICATIONS = "TOGGLE_NOTIFICATIONS";
export const TOGGLE_PROFILE = "TOGGLE_PROFILE";
export const TOGGLE_SEARCH = "TOGGLE_SEARCH";
export const TOGGLE_ALL = "TOGGLE_ALL";

const initialState = {
  buttonRecent: false,
  buttonMark: false,
  buttonCreate: false,
  buttonNotifications: false,
  buttonProfile: false,
  buttonSearch: false,
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_RECENT:
      return {
        ...state,
        buttonRecent: action.payload,
        buttonMark: false,
        buttonCreate: false,
        buttonNotifications: false,
        buttonProfile: false,
        buttonSearch: false,
      };
    case TOGGLE_MARK:
      return {
        ...state,
        buttonRecent: false,
        buttonMark: action.payload,
        buttonCreate: false,
        buttonNotifications: false,
        buttonProfile: false,
        buttonSearch: false,
      };
    case TOGGLE_CREATE:
      return {
        ...state,
        buttonRecent: false,
        buttonMark: false,
        buttonCreate: action.payload,
        buttonNotifications: false,
        buttonProfile: false,
        buttonSearch: false,
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        buttonRecent: false,
        buttonMark: false,
        buttonCreate: false,
        buttonNotifications: false,
        buttonProfile: false,
        buttonSearch: action.payload,
      };
    case TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        buttonRecent: false,
        buttonMark: false,
        buttonCreate: false,
        buttonNotifications: action.payload,
        buttonProfile: false,
        buttonSearch: false,
      };
    case TOGGLE_PROFILE:
      return {
        ...state,
        buttonRecent: false,
        buttonMark: false,
        buttonCreate: false,
        buttonNotifications: false,
        buttonProfile: action.payload,
        buttonSearch: false,
      };
    case TOGGLE_ALL:
      return {
        initialState,
      };

    default:
      return state;
  }
};
