import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUsersAction,
  deleteUsersAction,
  getUsersAction,
  updateUsersAction
} from "../../actions/actionTypes";

const initialState = {
  id: null,
  username: ""
};
const UsersShow = () => {
  const [userDetail, setUserDetail] = useState(initialState);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  const handleChange = (e) => {
    setUserDetail({
      ...userDetail,
      username: e.target.value
    });
    // setUserDetail(initialState);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      id: userDetail.id,
      username: userDetail.username
    };
    if (userDetail.isEdit) {
      dispatch(updateUsersAction(userDetail));
      setUserDetail(initialState);
    } else {
      dispatch(addUsersAction(data));
      setUserDetail(initialState);
    }
  };

  const handleUpdate = (id) => {
    const updateData = users.find((d) => d.id === id);
    setUserDetail({
      id: updateData.id,
      username: updateData.username,
      isEdit: id
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteUsersAction(id));
  };

  const toggleBtn = userDetail.isEdit ? "update" : "Add";

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="enter name"
          name="username"
          value={userDetail.username}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>{toggleBtn}</button>
      </form>
      {users &&
        users.map((d) => {
          return (
            <div key={d.id}>
              <h3>{d.username}</h3>
              <button onClick={() => handleUpdate(d.id)}>Update</button>
              <button onClick={() => handleDelete(d.id)}>Delete</button>
            </div>
          );
        })}
    </>
  );
};

export default UsersShow;
