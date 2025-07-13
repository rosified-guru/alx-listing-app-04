// components/layout/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} StayFinder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
