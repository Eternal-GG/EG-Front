import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../styles/Header.module.scss';
import commonObject from '../styles/CommonObject.scss';

import { BiSearch } from 'react-icons/bi';

import logo from '../images/EzggLogo.svg';
import Profile from "./Profile";
import {logoutUser} from "../modules/auth";
import {useDispatch} from "react-redux";

const cx = classNames.bind(styles, commonObject);

function Header({history}) {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const onChangeHandler = e => {setInput(e.currentTarget.value);};
    const onSearchHandler = () => {
        history.push(`/bs/player/${input}`);
    };
    const onClickHandler = () =>{
        dispatch(logoutUser());
        localStorage.removeItem("token");
        history.go(0);
    };
    return(
        <header>
            <div className={cx('content-left', 'clearfix')}>
                <Link to="/"><img src={logo} alt='logo' /></Link>
                <div>자유게시판</div>
                <div>랭커 통계</div>
            </div>
            <div className={cx('content-right')}>
                <div className={cx('search-box')}>
                    <input type="text" onChange={onChangeHandler} onKeyPress={e => {if(e.code === 'Enter') onSearchHandler()}}/>
                    <button><BiSearch className={cx('icon')} onClick={onSearchHandler}/></button>
                </div>
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

// todo 그냥 토큰값 존재 유무만 확인하면 되는지 아니면 한 번 검증 해야되는지 알아보기