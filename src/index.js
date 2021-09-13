import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CharacterStoreProvider } from './Provider/CharacterStoreProvider';
import CharacterStore from './Stores/CharacterStore';

import { BrowserRouter as  Router } from "react-router-dom";
const characterStore = new CharacterStore();

ReactDOM.render(
  <React.StrictMode>

    <CharacterStoreProvider characterStore={characterStore}>
      <Router>
      <App />
      </Router>
    </CharacterStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
