import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className='header'>
      <nav>
        <span className="logo">Marinho</span>
        <ul className="menu">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Portfolio'>Portfolio</Link></li>
          <li><Link to='/contatos'>Contatos</Link></li>
        </ul>
        <a href="https://github.com/jvmarinho061?tab=overview&from=2024-11-01&to=2024-11-30" className="github" target="_blank" rel="noopener noreferrer">Github</a>
      </nav>
    </header>
  );
};
