import React from "react";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigationList">
        <li>
          <a href="#about" className="navText">
            Обо мне
          </a>
        </li>
        <li>
          <a href="#projects" className="navText">
            Проекты
          </a>
        </li>
        <li>
          <a href="#contact" className="navText">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
