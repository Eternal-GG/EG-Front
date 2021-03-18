import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from "../modules/auth";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function LoginPage({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value);
    };
    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value);
    };

    const onClickHandler = async () => {
      const body={
          email,
          password
      };
        if(email && password){
            try{
                const res = await dispatch(loginUser(body));
                console.log(res);
                if(res.payload) {
                    localStorage.setItem("token", res.payload);
                    history.go(-1);
                    // 로그인 후 이전 페이지로 돌아감
                }
            }catch(e){
                console.error(e);
                alert('가입하지 않은 아이디이거나 비밀번호가 틀렸습니다.');
                // todo error message 에 따른 에러 처리 해주기
            }
        }else{
            alert("모든 입력 값을 채워주세요.");
        }
    };

    return(
        <>
            <Header history={history}/>
            <LoginForm onEmailHandler={onEmailHandler} onPasswordHandler={onPasswordHandler} onClickHandler={onClickHandler}/>
        </>
    );
}

export default LoginPage;

// 로그인 페이지
//TODO 이메일 또는 비번 하나만 안 쳤을 때 해당 부분 스타일 변하게 하기
// 에러처리 잘 되는지 확인하기