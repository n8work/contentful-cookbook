import * as React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/imprint">Imprint</NavLink>
    </nav>
  );

  // <header className="header">
  //   <h1>Worldwide Cookbook</h1>
  //   <p className="tagline">Meals from around the world, for every occasion</p>
  //   <nav>
  //     <ul>
  //       <l
  //       <li>Imprint</li>
  //       <li>Users</li>
  //     </ul>
  //   </nav>
  // </header>
}
