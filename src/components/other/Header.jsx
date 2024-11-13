import React, { useState, useEffect } from "react";

const Header = ({ data, changeUser }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (!data) {
      setUsername("Admin");
      setRole("Admin");
    } else {
      setUsername(data.firstName);
      setRole(data.role); // assuming `data` contains a `role` property
    }
  }, [data]);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello {role} <br />
        <span className="text-3xl font-semibold">
          {username} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
