import axios from "axios";
import { API_URL } from "../contants";

// Posting the users data to the restApi
const postUsers = async (data) => {
  try {
    const response = await axios
      .post(`${API_URL}/users`, data)
      .then((res) => res.data);
    return response;
  } catch (error) {
    throw new error(`Error Occured - ${error}`);
  }
};

// Getting the users data from the restApi
const getUsers = async () => {
  try {
    const response = await axios
      .get(`${API_URL}/users`)
      .then((res) => res.data);
    return response;
  } catch (error) {
    throw new error(`Error Occured - ${error}`);
  }
};

const updateUsers = async (data) => {
  const { id } = data;
  try {
    const response = await axios
      .put(`${API_URL}/users/${id}`, data)
      .then((res) => {
        return {
          message: "updated successfully"
        };
      });
    return response;
  } catch (error) {
    throw new error(`Error Occured - ${error}`);
  }
};

const deleteUsers = async (id) => {
  try {
    const response = await axios
      .delete(`${API_URL}/users/${id}`)
      .then((res) => {
        return {
          message: "Deleted Successfully"
        };
      });
    return response;
  } catch (error) {
    throw new error(`Error Occured - ${error}`);
  }
};

// exporting the API services
export { postUsers, getUsers, updateUsers, deleteUsers };
