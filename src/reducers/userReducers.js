import {
  ADD_USERS,
  DELETE_USERS,
  RETRIVE_USERS,
  UPDATE_USERS
} from "../actions/types";

const initialState = {
  users: []
};

const userReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USERS:
      return {
        users: [...state.users, payload]
      };
    case RETRIVE_USERS:
      return {
        users: payload
      };
    case UPDATE_USERS:
      const updateUser = state.users.map((d) => {
        if (d.id === payload.id) {
          return { ...d, username: payload.username };
        }
        return d;
      });
      return {
        users: updateUser
      };
    case DELETE_USERS:
      const restUsers = state.users.filter((d) => d.id !== payload);
      return {
        users: restUsers
      };
    default:
      return state;
  }
};

export default userReducers;
