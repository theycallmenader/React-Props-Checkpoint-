import React from "react";
import PropTypes from "prop-types";
import "./profile.css";

export const Profile = (props) => {
  return (
    <div className="background">
      <div className="imgContainer">
        <div className="image">{props.children}</div>
        <div className="imgText">{props.imgText}</div>
      </div>
      <div className="profileInfo">
        {/* <h1 className="info">{props.fullName}</h1>
        <h2 className="info">{props.profession}</h2> */}
        <p className="info"> {props.bio}</p>
        <button
          onClick={() => props.handlename(props.fullName)}
          className="btn btn-profile"
        >
          Say Hello{" "}
        </button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
