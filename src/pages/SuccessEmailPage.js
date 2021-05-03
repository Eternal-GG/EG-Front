import React from 'react';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import logo from '../images/EzggLogo.png';
import styles from '../styles/PleaseVerifyEmailPage.module.scss';
import commonObject from '../styles/CommonObject.scss';
import {Link} from "react-router-dom";

const cx = classNames.bind(styles, commonObject);

function SuccessEmailPage({history}) {
    return(
        <>
            <Header history={history}/>
            <section className={cx('Wrapper')}>
                <article className={cx('success')}>
                    <img src={logo} alt='logo' />
                    <span>가입을 축하합니다!</span>
                    <span>이메일 인증이 완료되었습니다.</span>
                    <Link to="/login"><button className={cx('btn', 'yellow', 'login')}>로그인하러 가기</button></Link>
                </article>
            </section>
        </>
    )
}

export default SuccessEmailPage;

// 회원가입 > 이메일 인증 후 인증에 성공하면 보게 되는 페이지