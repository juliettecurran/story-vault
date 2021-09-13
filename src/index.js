import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CharacterStoreProvider } from './Provider/CharacterStoreProvider';
import CharacterStore from './Stores/CharacterStore';


const characterStore = new CharacterStore();

ReactDOM.render(
  <React.StrictMode>
    <CharacterStoreProvider characterStore={characterStore}>
      <App />
    </CharacterStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
