import React, { useEffect, useState } from 'react';
import Entry from './model/Entry';
var contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_contentful_space,
  accessToken: process.env.REACT_APP_contentful_token
});

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  function fetchEntries() {
    client.getEntries().then(function (untypedEntries) {
      // https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/entries/entry

      setEntries(
        untypedEntries.items.map((untypedEntry) => new Entry(untypedEntry))
      );
    });
  }

  return (
    <div className="App">
      <header className="container">
        <h1>Worldwide Cookbook</h1>
        <p className="tagline">
          Meals from around the world, for every occasion
        </p>
      </header>

      <section className="container">
        <ul className="entries">
          {entries.map((entry) => {
            return (
              <li key={entry.id} className="entry-card">
                {entry.render()}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
