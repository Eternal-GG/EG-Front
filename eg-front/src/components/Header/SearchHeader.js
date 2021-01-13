import React from 'react';
import logo from '../../images/ez logo.png';
import styles from './SearchHeader.module.scss';
import { BiSearch } from 'react-icons/bi';

function SearchHeader() {
    const {SearchHeader, Icon} = styles;
    return(
        <div className={SearchHeader}>
            <img src={logo} alt='logo' />
            <h1>Ez.GG</h1>
            <form>
                <input type='text' placeholder='플레이어 닉네임'/>
                <button type='submit'><BiSearch className={Icon} /></button>
            </form>
        </div>
    )
}

export default SearchHeader;

// 검색창이 있는 헤더