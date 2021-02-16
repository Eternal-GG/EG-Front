import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";
import ChangePwdPage from "./pages/ChangePwdPage";

import './App.scss';
import AgreementPage from "./pages/AgreementPage";
import MatchHistoryPage from "./pages/MatchHistoryPage";
import PleaseVerifyEmailPage from "./pages/PleaseVerifyEmailPage";
import SuccessEmailPage from "./pages/SuccessEmailPage";
import FailEmailPage from "./pages/FailEmailPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={RegisterPage} />
            <Route path='/mypage' component={MyPage} />
            <Route path='/changepwdpage' component={ChangePwdPage} />
            <Route path='/agreement' component={AgreementPage} />
            <Route path='/bs/player/:gameNickname' component={MatchHistoryPage} />
            <Route exact path='/verification' component={PleaseVerifyEmailPage}/>
            <Route path='/verification/success' component={SuccessEmailPage} />
            <Route path='/verification/fail' component={FailEmailPage} />
            <Route path='/error' component={ErrorPage} />
        </Switch>
    </div>
  );
}

export default App;
