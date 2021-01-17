import React from 'react';
import styles from './SignUpPage.module.scss';

function SignUpPage() {
    const {SignupBox} = styles;
    return(
        <div className={SignupBox}>
            <h1><b>Ez.GG</b></h1>
            <input type="text" name="email" placeholder="이메일 주소" />
            <button>인증하기</button>
            <input type="password" name="password" placeholder="비밀번호" />
            <input type="password" name="password" placeholder="비밀번호 확인" />
            <button>계정 생성하기</button>
        </div>);
}

export default SignUpPage;