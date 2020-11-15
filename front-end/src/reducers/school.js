import {
  GET_ALL_SCHOOLS,
  ACCEPT_SCHOOL,
  REJECT_SHCOOL,
} from "../actions/types";

const initialState = {
  schools: [],
  pendingSchools: [],
  acceptedSchools: [],
  rejectedSchools: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SCHOOLS:
      return {
        schools: action.payload,
        pendingSchools: action.payload.filter((s) => s.status === "pending"),
        acceptedSchools: action.payload.filter((s) => s.status === "accepted"),
        rejectedSchools: action.payload.filter((s) => s.status === "rejected"),
      };
    case ACCEPT_SCHOOL:
      return {
        ...state,
        pendingSchools: state.pendingSchools.filter(
          (s) => s._id !== action.payload._id
        ),
        acceptedSchools: [...state.acceptedSchools, action.payload],
      };
    case REJECT_SHCOOL:
      return {
        ...state,
        pendingSchools: state.pendingSchools.filter(
          (s) => s._id !== action.payload._id
        ),
        rejectedSchools: [...state.rejectedSchools, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
