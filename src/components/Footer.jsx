import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-blue-900/70">
      © {new Date().getFullYear()} MyScan. All rights reserved.
    </footer>
  );
}
