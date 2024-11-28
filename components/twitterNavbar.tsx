"use client";

import { signOut } from "next-auth/react";

function Navbar() {
  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <button className="bg-white rounded-full border border-gray-200 text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
        <span onClick={() => signOut()}>Logout</span>
      </button>
    </div>
  );
}

const NavItem = ({ icon, label }) => (
  <div className="mb-2 hover:bg-gray-200 rounded-full py-2 px-4 flex items-center space-x-2">
    {icon}
    <span>{label}</span>
  </div>
);

export default Navbar;
