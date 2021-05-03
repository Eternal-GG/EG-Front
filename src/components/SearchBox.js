import React from 'react';
import classNames from 'classnames/bind';
import {BiSearch} from "react-icons/bi";
import styles from "../styles/SearchBox.module.scss";

const cx = classNames.bind(styles);

function SearchBox({searchBoxStyle, onChangeHandler, onSearchHandler}) {
    return (
        <form role="search" aria-label="game-log" className={cx(searchBoxStyle)}>
            <input
                type="search"
                name="search"
                required
                onChange={onChangeHandler} onKeyPress={e => (e.code === 'Enter') && onSearchHandler()}/>
            <button className={cx('close-icon')} type="reset" />
            <button><BiSearch className={cx('icon')} onClick={onSearchHandler}/></button>
        </form>
    );
}

export default SearchBox;