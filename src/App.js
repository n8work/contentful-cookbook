import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, NavLink } from "react-router-dom";
import Recipe from './model/Recipe';
var contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_contentful_space,
  accessToken: process.env.REACT_APP_contentful_token
});

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const { t, i18n } = useTranslation();

  const setLangEN = () => {
    console.log("setLang -> EN");
    i18n.changeLanguage('en');
  }
  
  const setLangDE = () => {
    console.log("setLang -> DE");
    i18n.changeLanguage('de');
  }

  const setLangFR = () => {
    console.log("setLang -> FR");
    i18n.changeLanguage('fr');
  }

  let activeCn = "navlinkLang active";
  let deactiveCn = "navlinkLang";

  function fetchRecipes() {
    const query = { content_type: 'wbsRecipe' };

    client.getEntries(query).then(function (untypedRecipes) {
      // https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/entries/entry

      setRecipes(
        untypedRecipes.items.map((untypedRecipe) =>
          Recipe.fromUntyped(untypedRecipe)
        )
      );
    });
  }

  return (
    <div className="App">
      <header className="container">

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

        <h1> {t('cookbook.headline')}</h1>
        <p className="tagline">
        {t('cookbook.tagline')}
        </p>
      </header>

      <section className="container">
        <ul className="recipe-list">
          {recipes.map((recipe) => {
            return (
              <li key={recipe.id} className="recipe-card">
                {recipe.render()}
              </li>
            );
          })}
        </ul>
      </section>

        <Routes>
          <Route path="/" element={''} />
        </Routes>

    </div>
  );
}

export default App;
