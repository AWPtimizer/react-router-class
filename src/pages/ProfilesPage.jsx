import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 justify-center">
        {profiles.map((profile) => {
          return (
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-red-500" : "text-white"
              }}
              key={profile}
              to={`/profiles/${profile}`}
            >
              Profile {profile}
            </NavLink>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default ProfilesPage;
