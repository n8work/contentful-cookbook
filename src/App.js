import React from "react";
import './App.css';
const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_contentful_space,
  accessToken: process.env.REACT_APP_contentful_token
});

const content = document.querySelector("#content");

client.getEntries().then(function (entries) {

  // https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/entries/entry

  entries.items.forEach(function (entry) {

    console.log("Entries OBJ: ", entry);
    console.log("Entries Title: ", entry.fields.title);
    console.log("Entries Author: ", entry.fields.author);
    console.log("Locale: ", entry.sys.locale);

  });
});

function App() {

  return (
    <div className="App">
          <p id="content"></p>
    </div>
  );
}

export default App;