import React from "react";

function Header() {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center max-w-4xl">
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">
            Zinnia Books
          </h1>
        </div>
      </header>
    </>
  );
}

export default Header;
