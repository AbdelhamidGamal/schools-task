import { SET_USER, SIGN_OUT, AUTH_ERROR, SIGNING_IN } from "../actions/types";

const initState = {
  authenticated: false,
  user: null,
  loading: false,
  error: null,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case SIGNING_IN:
      return {
        authenticated: false,
        user: null,
        loading: true,
        error: null,
      };
    case SET_USER:
      return {
        user: action.payload,
        authenticated: true,
        error: null,
        loading: false,
      };

    case SIGN_OUT:
      return {
        user: null,
        authenticated: false,
        error: null,
        loading: false,
      };

    case AUTH_ERROR:
      return {
        user: null,
        authenticated: false,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default reducer;
