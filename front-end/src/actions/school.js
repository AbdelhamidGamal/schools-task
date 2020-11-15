import { GET_ALL_SCHOOLS, ACCEPT_SCHOOL, REJECT_SHCOOL } from "./types";

import axios from "axios";
axios.defaults.withCredentials = true;

const API = process.env.REACT_APP_API;

const getAllSchools = (schools) => ({
  type: GET_ALL_SCHOOLS,
  payload: schools,
});

const acceptSchool = (school) => ({
  type: ACCEPT_SCHOOL,
  payload: school,
});

const rejectSchool = (school) => ({
  type: REJECT_SHCOOL,
  payload: school,
});

export const handleGetAllSchools = () => async (dispatch) => {
  try {
    const res = await axios(`${API}/api/school`);
    dispatch(getAllSchools(res.data.schools));
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

export const handleAcceptSchool = (id) => async (dispatch) => {
  try {
    console.log(id);
    const res = await axios.post(`${API}/api/school/accept`, { id });
    console.log(res);

    dispatch(acceptSchool(res.data.success));
  } catch (e) {
    console.log(e);
  }
};

export const handleRejectSchool = (id) => async (dispatch) => {
  try {
    const res = await axios.post(`${API}/api/school/reject`, { id });
    console.log(res);

    dispatch(rejectSchool(res.data.success));
  } catch (e) {
    console.log(e);
  }
};
