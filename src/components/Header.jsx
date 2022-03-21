import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Worldwide Cookbook</h1>
      <p className="tagline">Meals from around the world, for every occasion</p>
      <nav>
        <NavLink className="btn" to="/">
          Home
        </NavLink>
        <NavLink className="btn" to="/about">
          About
        </NavLink>
        <NavLink className="btn" to="/imprint">
          Imprint
        </NavLink>
      </nav>
    </header>
  );
}
