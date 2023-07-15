import { render } from "@testing-library/react";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="header-lists">
          <li className="header-list">Home</li>
          <li className="header-list">About</li>
          <li className="header-list">Blog</li>
          <li className="header-list">Contact</li>
        </ul>
      </header>
    );
  }
}
export default Header;
