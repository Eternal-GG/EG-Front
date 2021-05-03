import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../styles/Header.module.scss';
import commonObject from '../styles/CommonObject.scss';

import logo from '../images/EzggLogo.png';
import Profile from "./Profile";
import {logoutUser} from "../modules/auth";
import {useDispatch} from "react-redux";
import SearchBox from "./SearchBox";

const cx = classNames.bind(styles, commonObject);
const SEARCH_BOX_STYLE = 'search-box__in_header';

function Header({history}) {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const onChangeHandler = e => {setInput(e.currentTarget.value);};
    const onSearchHandler = () => {
        (input.length > 0) && history.push(`/bs/player/${input}`);
    };
    const onClickHandler = () =>{
        dispatch(logoutUser());
        localStorage.removeItem("token");
        history.go(0);
    };
    return(
        <header>
            <nav className={cx('content-left')}>
                <Link to="/"><img src={logo} alt='logo' /></Link>
                <span>자유게시판</span>
                <span>랭커 통계</span>
            </nav>
            <div className={cx('content-right')}>
                <SearchBox searchBoxStyle={SEARCH_BOX_STYLE} onChangeHandler={onChangeHandler} onSearchHandler={onSearchHandler} />
                {
                    localStorage.getItem('token') ?
                        <Profile cx={cx} onClickHandler={onClickHandler}/>
                        :
                        <Link to="/login"><button className={cx('btn', 'yellow', 'login')}>로그인</button></Link>
                }
            </div>
        </header>
    );
}

export default Header;