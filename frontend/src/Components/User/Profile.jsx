import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import MetaData from "../Layout/MetaData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Layout/Loader/Loader";
import "./Profile.css";

function Profile() {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${user.user.name} - Profile`} />
          <div className="profile_Container">
            <div>
              <h1>My Profile</h1>
              <Avatar
                src={user.user.avatar.url}
                alt={user.user.name}
                sx={{ height: "14vmax", width: "14vmax" }}
              ></Avatar>
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p className="para">{user.user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p className="para">{user.user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p className="para">
                  {String(user.user.createdAt).substr(0, 10)}
                </p>
              </div>
              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
