import React from 'react';
import styles from './LoginPage.module.scss'
import {Link} from "react-router-dom";
import Header from "../components/Header";

function LoginPage() {
    const {LoginBox, TextBox, RemainBox, TextButton} = styles;
    return(
        <>
            <Header />
            <div className={LoginBox}>
                <h1><b>Ez.GG</b></h1>
                    <input className={TextBox} type='text' name='id' placeholder='이메일 주소' />
                    <input className={TextBox} type='password' name='password' placeholder='비밀번호' />
                    <div className={RemainBox}>
                        <input type='checkbox' name='remainLogin' />
                        <span>로그인 기억하기</span>
                    </div>
                    <button type='submit'>로그인 하기</button>
                <div className={TextButton}>
                    <span><Link to="/signup">회원가입하기</Link></span>
                    <span><Link to="/changepwdpage">비밀번호 찾기</Link></span>
                </div>
            </div>
        </>
    );
}

export default LoginPage;

// 로그인 페이지, 헤더 X