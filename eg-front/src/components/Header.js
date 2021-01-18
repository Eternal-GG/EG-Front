import React from "react";
import {Link} from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../styles/Header.module.scss";

import { BiSearch } from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';

import logo from "../images/EzggLogo.svg";

const cx = classNames.bind(styles);

function Header() {
    return(
        <header>
            <div className={cx('content-left', 'clearfix')}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div>자유게시판</div>
                <div>랭커 통계</div>
            </div>
            <div className={cx('content-right')}>
                <div className={cx('search-box')}>
                    <input type="text" />
                    <button><BiSearch className={cx('icon')} /></button>
                </div>
                {/*<Link to="/login"><button className={cx('login-btn')}>로그인</button></Link>*/}
                <Link to="/mypage"><CgProfile className={cx('mypage-btn')}/></Link>
            </div>
        </header>
    );
}

export default Header;