import React from 'react';
import {Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import styles from './App.module.scss';

function App() {
    const {App} = styles;
  return (
    <div className={App}>
        <Route path="/" exact component={MainPage} />
    </div>
  );
}

export default App;
