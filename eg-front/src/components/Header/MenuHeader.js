import React from 'react';
import {Link} from 'react-router-dom';
import styles from './MenuHeader.module.scss';

function MenuHeader() {
    const {MenuHeader} = styles;
    return(
            <div className={MenuHeader}>
                <ul>
                  <li>자유 게시판</li>
                  <li>랭커 통계</li>
                </ul>
                <Link to='/login'><button>로그인</button></Link>
            </div>
    );
}

export default MenuHeader;

// 메뉴와 로그인 버튼, 프로필 버튼이 있는 헤더