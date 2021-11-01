import React from "react";

const Navbar = () => {
  const handleLogOut = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="navbar">
      <button className="log-out" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
