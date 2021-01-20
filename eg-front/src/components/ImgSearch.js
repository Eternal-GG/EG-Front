import React from "react";
import styles from "../styles/ImgSearch.module.scss";
import classNames from "classnames/bind";
import { BiSearch } from 'react-icons/bi';

const cx = classNames.bind(styles);

function ImgSearch() {
    return(
        <div className={cx('img-box')}>
            <div className={cx('search-box')}>
                <input type="text" />
                <button><BiSearch className={cx('icon')} /></button>
            </div>
        </div>
    );
}

export default ImgSearch;