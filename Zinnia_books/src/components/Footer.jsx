import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto text-center text-sm text-gray-500">
        <div className="container mx-auto px-4 max-w-4xl">
          <p>
            &copy; {new Date().getFullYear()} Zinnia Books. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
