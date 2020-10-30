import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons";

function ListUsers(props) {
  const { email, phone, name, className, to, src, disabled } = props;
  return (
    <div className={className}>
      <div
        className={`d-flex flex-column  justify-content-between shadow-sm pl-3 bg-white  py-3 mb-2`}
      >
        <div className="d-flex align-items-center">
          <img
            className="rounded-14 object-cover"
            src={src ? src : "/assets/images/icons/default.svg"}
            height="56px"
            width="56px"
            alt="images"
          />

          <div className="pl-3">
            {!disabled ? (
              <div className="font-weight-bold text-dark">
                {name}
              </div>
            ) : (
              <div className="font-weight-bold text-dark">{name}</div>
            )}
            <div className="small">{email}</div>
            <div className="small">{phone}</div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div to={to} className="mr-1">
            <Icons iconName="trash-red " iconHeight={24} iconWidth={28} />
          </div>
          <Link to={to} className="mr-3">
            <Icons iconName="edit-admin" iconHeight={24} iconWidth={28} />
          </Link>
        </div>
      </div>
     </div>
  );
}

export default ListUsers;
