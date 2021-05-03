import React from "react";
import styles from "../styles/ImgSearch.module.scss";
import classNames from "classnames/bind";

import SearchBox from "./SearchBox";

const cx = classNames.bind(styles);
const SEARCH_BOX_STYLE = 'search-box__in_img';

function ImgSearch({onChangeHandler, onSearchHandler}) {
    return(
        <div className={cx('img-box')}>
            <SearchBox
                searchBoxStyle={SEARCH_BOX_STYLE}
                onChangeHandler={onChangeHandler}
                onSearchHandler={onSearchHandler} />
        </div>
    );
}

export default ImgSearch;