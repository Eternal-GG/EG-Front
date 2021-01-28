import React from 'react';
import logo from "../images/EzggLogo.svg";
import {Link} from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../styles/LoginForm.module.scss";

const cx = classNames.bind(styles);

function LoginForm({onEmailHandler, onPasswordHandler, onClickHandler}) {
    const inputStyle='TextBox';
    return(
        <article>
            <div className={cx('LoginBox')}>
                <img src={logo} alt="logo" />
                <input
                    className={cx(inputStyle)}
                    type='email'
                    name='email'
                    placeholder='이메일 주소'
                    onChange={onEmailHandler}
                />
                <input
                    className={cx(inputStyle)}
                    type='password'
                    name='password'
                    placeholder='비밀번호'
                    onChange={onPasswordHandler}
                />
                <div className={cx('RemainBox')}>
                    <input type='checkbox' name='remainLogin' />
                    <span>로그인 기억하기</span>
                </div>
                <button onClick={onClickHandler}>로그인 하기</button>
                <div className={cx('TextButton')}>
                    <span><Link to="/signup">회원가입하기</Link></span>
                    <span><Link to="/changepwdpage">비밀번호 찾기</Link></span>
                </div>
            </div>
        </article>
    );
}

export default LoginForm;