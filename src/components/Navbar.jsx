import React from "react";

const Navbar = () => {
  const handleLogOut = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="navbar">
      <li className="log-out" onClick={handleLogOut}>
        Log Out
      </li>
    </div>
  );
};

export default Navbar;
