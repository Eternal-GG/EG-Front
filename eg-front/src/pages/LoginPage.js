import React, {useState} from 'react';
import styles from './LoginPage.module.scss'
import Header from "../components/Header";
import axios from "axios";
import {loginAPI} from "../Config";
import LoginForm from "../components/LoginForm";

function LoginPage({history}) {
    const [login, setLogin] = useState({email: null, password: null});
    const [error, setError] = useState(null);
    const [inputStyle, setInputStyle] = useState(['TextBox']);

    const {email, password} = login;

    const fetchUsers = async () => {
        console.log({login});
        let token;
        try{
            nullCheck();
            const res = await axios.post(
                loginAPI,
                {'email':email, 'password':password}
            );
            console.log(res)
            token = res.data;
            localStorage.setItem('token', token);
            history.goBack();
        } catch(e){
            setError(e);
            console.log(e);
            alert('회원 정보가 일치하지 않습니다');
        }
    };

    const nullCheck = () => {
        if(!email){
            inputWarn(true);
            throw "nullException";
        }else if(!password){
            inputWarn(true);
            throw "nullException";
        }else{
            inputWarn(false);
        }
    };

    const inputWarn = (flag, who) => {
        flag ?
            setInputStyle([...inputStyle, 'warn']) :
            setInputStyle(inputStyle.filter(item => item === 'TextBox'));
    };
    return(
        <>
            <Header />
            <LoginForm inputStyle={inputStyle} login={login} setLogin={setLogin} fetchUsers={fetchUsers}/>
        </>
    );
}

export default LoginPage;

// 로그인 페이지
//TODO 로그인 로직 살펴보기, onchange말고 id값 넣는 법 알아오기
// 이메일 또는 비번 하나만 안 쳤을 때 스타일 다 변하는거 고치기
// 로그인 유지 시키기