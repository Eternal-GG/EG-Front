import React from 'react';
import {Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import ChangePwdPage from "./pages/ChangePwdPage";

import styles from './App.module.scss';
import AgreementPage from "./pages/AgreementPage";

function App() {
    const {App} = styles;
  return (
    <div className={App}>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/changepwdpage" component={ChangePwdPage} />
        <Route path="/Agreement" component={AgreementPage} />
    </div>
  );
}

export default App;
