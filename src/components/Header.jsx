import * as React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <>
    
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/imprint">Imprint</NavLink>
    </nav>

        <div className="languageSwitcher">
          <button onClick={setLangEN} className="buttonLang">English</button>
          <button onClick={setLangDE} className="buttonLang">Deutsch</button>
          <button onClick={setLangFR} className="buttonLang">Français</button>

          {/* */}
          <NavLink to="/en/" className={ ({isActive}) => isActive ? activeCn : deactiveCn }>🇺🇸</NavLink>
          <NavLink to="/de/" className={ ({isActive}) => isActive ? activeCn : deactiveCn }>🇩🇪</NavLink>
          <NavLink to="/fr/" className={ ({isActive}) => isActive ? activeCn : deactiveCn }>🇫🇷</NavLink> 
          {/* */}
        </div>

    </>
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
