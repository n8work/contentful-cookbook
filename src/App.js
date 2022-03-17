import React, { useEffect, useState } from 'react';
import NavComponent from './components/NavComponent';
import RecipeComponent from './components/RecipeComponent';
import UserCard from './components/UserCard';
import Recipe from './model/Recipe';
import User from './components/User';
var contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_contentful_space,
  accessToken: process.env.REACT_APP_contentful_token
});

function App() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchRecipes();
    fetchUsers();
  }, []);

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

  function fetchUsers() {
    const query = { content_type: 'wbsCookbookUsers' };
    console.log('user query: ', query);

    client.getEntries(query).then(function (untypedUsers) {
      setUsers(
        untypedUsers.items.map((untypedUser) => User.fromUntyped(untypedUser))
      );
    });
  }

  return (
    <div className="App">
      <header className="container">
        <NavComponent />
      </header>

      <section className="container">
        <ul className="recipe-list">
          {recipes.map((recipe) => {
            return (
              <li key={recipe.id} className="recipe-card">
                <RecipeComponent recipe={recipe} />
              </li>
            );
          })}
        </ul>

        <section className="container">
          <ul className="recipe-list">
            <UserCard users={users} />
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
