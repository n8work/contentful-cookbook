import * as React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const setLangEN = () => {
    console.log("setLang -> EN");
    i18n.changeLanguage("en");
  };

  const setLangDE = () => {
    console.log("setLang -> DE");
    i18n.changeLanguage("de");
  };

  const setLangFR = () => {
    console.log("setLang -> FR");
    i18n.changeLanguage("fr");
  };

  let activeCn = ".navlink-lang active";
  let deactiveCn = ".navlink-lang";

  return (
    <>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/imprint">Imprint</NavLink>
      </nav>

      <div className="language-switcher">
        <button onClick={setLangEN} className="button-lang">
          English 🇺🇸
        </button>
        <button onClick={setLangDE} className="button-lang">
          Deutsch 🇩🇪
        </button>
        <button onClick={setLangFR} className="button-lang">
          Français 🇫🇷
        </button>

      {/*
        <NavLink
          to="/en/"
          className={({ isActive }) => (isActive ? activeCn : deactiveCn)}
        >
          🇺🇸
        </NavLink>
        <NavLink
          to="/de/"
          className={({ isActive }) => (isActive ? activeCn : deactiveCn)}
        >
          🇩🇪
        </NavLink>
        <NavLink
          to="/fr/"
          className={({ isActive }) => (isActive ? activeCn : deactiveCn)}
        >
          🇫🇷
        </NavLink>
     */}


        <h1> {t('cookbook.headline')}</h1>
        <p className="tagline">
        {t('cookbook.tagline')}
        </p>

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
