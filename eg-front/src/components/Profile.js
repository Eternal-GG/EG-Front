import React,{useState} from 'react';
import {CgProfile} from 'react-icons/cg';
import {Link} from "react-router-dom";

function Profile({cx, onClickHandler}) {
    const [visible, setVisible] = useState(false);
    return(
        <>
            <CgProfile className={cx('profile', {checked: visible})} onClick={() =>{setVisible(!visible)}}/>
            {
                visible ?
                    <ul className={cx('dropdown-menu')}>
                        <li><Link to='/mypage'>마이페이지</Link></li>
                        <li><button onClick={onClickHandler}>로그아웃</button></li>
                    </ul>
                    :
                    false
            }

        </>
    )
}
export default Profile;
// 헤더의 프로필 컴포넌트