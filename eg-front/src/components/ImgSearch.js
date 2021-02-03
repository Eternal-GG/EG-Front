import React from "react";
import styles from "../styles/ImgSearch.module.scss";
import classNames from "classnames/bind";
import { BiSearch } from 'react-icons/bi';

const cx = classNames.bind(styles);

function ImgSearch({onChangeHandler, onSearchHandler}) {
    return(
        <div className={cx('img-box')}>
            <div className={cx('search-box')}>
                <input type="search" onChange={onChangeHandler} onKeyPress={e => {if(e.code === 'Enter') onSearchHandler()}}/>
                <button><BiSearch className={cx('icon')} onClick={onSearchHandler}/></button>
            </div>
        </div>
    );
}

export default ImgSearch;