import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.scss';

import {
    MainPage, LoginPage, RegisterPage,
    ChangePwdPage, MyPage, AgreementPage,
    MatchHistoryPage, PleaseVerifyEmailPage, SuccessEmailPage,
    FailEmailPage, ErrorPage
} from './pages';

function App() {
    const RouteNoMatch = () => {
      return <div>404 NOT FOUND</div>
    };

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
            <Route component={RouteNoMatch} />
        </Switch>
    </div>
  );
}

export default App;
