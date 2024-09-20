import React from "react";
import { Link } from "react-scroll";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigationList">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="navText"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="navText"
          >
            My projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="navText"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
