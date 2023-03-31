import {
  deleteUsers,
  getUsers,
  postUsers,
  updateUsers
} from "../services/user.service";
import { ADD_USERS, DELETE_USERS, RETRIVE_USERS, UPDATE_USERS } from "./types";

export const addUsersAction = (data) => async (dispatch) => {
  try {
    const res = await postUsers(data);
    dispatch({
      type: ADD_USERS,
      payload: res
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUsersAction = () => async (dispatch) => {
  try {
    const res = await getUsers();
    dispatch({
      type: RETRIVE_USERS,
      payload: res
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateUsersAction = (data) => async (dispatch) => {
  try {
    const res = await updateUsers(data);
    dispatch({
      type: UPDATE_USERS,
      payload: data
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteUsersAction = (id) => async (dispatch) => {
  try {
    const res = await deleteUsers(id);
    dispatch({
      type: DELETE_USERS,
      payload: id
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
