import React from "react";

const NavBar = () => {
  return (
    <div className="container mx-auto flex w-full items-center justify-between py-4">
      <div className="flex items-center space-x-12">
        <div className="flex space-x-3">
          <div className="h-11 w-11 rounded-lg bg-primary-100" />
          <div>
            <h1 className="text-text-100 font-medium">Logo</h1>
            <h3 className="text-text-200 text-sm">For GitHub Actions</h3>
          </div>
        </div>
        <ul className="flex items-center gap-8 text-text-200 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-text-200">Log in</p>
      </div>
    </div>
  );
};

export default NavBar;
