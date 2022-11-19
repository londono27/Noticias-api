import React from "react";

export default function Header({ titulo }) {
  return (
    <nav className="nav-wrapper blue-grey darken-3">
      <a href="#!" className="brand-logo center">
        {titulo}
      </a>
    </nav>
  );
}
