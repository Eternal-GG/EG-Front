import React from 'react';
import {Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import styles from './App.module.scss';
import LoginPage from "./pages/LoginPage";

function App() {
    const {App} = styles;
  return (
    <div className={App}>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
    </div>
  );
}

export default App;
