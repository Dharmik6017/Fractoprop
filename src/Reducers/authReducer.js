import { USER_DATA, SET_CURRENT_USER } from "../Actions/types";

const initialState = {
  isAuthenticated: false,
  user: false,
  user_data: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload,
      };

    case USER_DATA:
      return {
        ...state,
        user_data: action.payload,
      };
    default:
      return state;
  }
}
