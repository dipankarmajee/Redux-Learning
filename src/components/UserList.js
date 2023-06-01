import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, fetchUsers } from "../store";
import SkeletonLoader from "./SkeletonLoader";
import {
  IoIosArrowDropdownCircle,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const UserList = () => {
  const dispatch = useDispatch();
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [userError, setUserError] = useState(null);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setUserError(err))
      .finally(() => setIsLoadingUsers(false));
  }, [dispatch]);

  if (isLoadingUsers) {
    return (
      <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
        <SkeletonLoader data={6} />
      </div>
    );
  }

  if (userError) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
        <h4>Something went wrong</h4>
        <h6>{userError.message}</h6>
      </div>
    );
  }

  const RenderedUsers = () => {
    return (
      <div className="w-50">
        {users.data.map((eachUser, index) => (
          <div
            key={index}
            className="d-flex flex-column gap-2 shadow p-3 rounded"
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="d-flex align-items-center gap-3">
                <span>
                  <IoIosCloseCircleOutline className="fw-bold" size={30} />
                </span>
                <h4>{eachUser.name}</h4>
              </div>

              <IoIosArrowDropdownCircle
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#userCollaspe${index}`}
                aria-expanded="false"
                aria-controls="{`userCollaspe${index}`}"
                className="fw-bold"
                size={30}
              />
            </div>
            <div className="collapse" id={`userCollaspe${index}`}>
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const onClickAddUser = () => {
    dispatch(addUsers());
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
      <div className="d-flex justify-content-between w-50">
        <h4 className="m-0">List of Users</h4>
        <button className="btn btn-primary px-4 py-1" onClick={onClickAddUser}>
          {" "}
          + Add Users
        </button>
      </div>
      <hr className="w-50" />
      <div></div>
      <RenderedUsers />
    </div>
  );
};

export default UserList;
