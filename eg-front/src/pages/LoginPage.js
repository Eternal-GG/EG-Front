import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {loginUser} from "../modules/auth";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value);
    };
    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value);
    };

    const onClickHandler = () => {
      const body={
          email,
          password
      };
      if(email && password){
          dispatch(loginUser(body))
              .then(res => {
                  console.log(res);
                  if(res.payload.loginSuccess){
                      localStorage.setItem("token", res.data)
                      props.history.push("/");
                  }else{
                      alert(res.payload.message);
                  }
              })
              .catch(err => {
                  console.log(err);
              });
      }else{
          alert("모든 입력 값을 채워주세요.")
      }
    };

    return(
        <>
            <Header />
            <LoginForm onEmailHandler={onEmailHandler} onPasswordHandler={onPasswordHandler} onClickHandler={onClickHandler}/>
        </>
    );
}

export default withRouter(LoginPage);

// 로그인 페이지
//TODO 이메일 또는 비번 하나만 안 쳤을 때 해당 부분 스타일 변하게 하기
// 로그인 유지 시키기
// 에러처리 잘 되는지 확인하기