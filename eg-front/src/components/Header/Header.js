import React from 'react';
import MenuHeader from "./MenuHeader";
import SearchHeader from "./SearchHeader";
import './Header.module.scss';

function Header() {
    return(
        <header>
            <SearchHeader/>
            <MenuHeader/>
        </header>
    );
}

export default Header;

// 공용 헤더, sticky