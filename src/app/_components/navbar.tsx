import React from "react";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="container mx-auto flex w-full items-center justify-between py-4">
      <div className="flex items-center space-x-12">
        <div className="flex space-x-3">
          <div className="h-11 w-11 rounded-md bg-primary-100 flex items-center justify-center">
            <div className="h-8 w-8 rounded-md bg-text-100"></div>
          </div>
          <div>
            <h1 className="font-medium text-text-100">Logo</h1>
            <h3 className="text-sm text-text-200">For GitHub Actions</h3>
          </div>
        </div>
        <ul className="flex items-center gap-8 text-sm text-text-200">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-text-200">Log in</p>
        <div className="flex items-center justify-center gap-2 rounded-lg bg-primary-100 p-3">
          <FaGithub className="inline" size={16} color="white" />
          <p className="rounded-md text-xs text-text-100">
            Get Started for Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
