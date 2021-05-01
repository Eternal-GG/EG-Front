import React from 'react';
import Header from "../components/Header";

function MyPage({history}) {
    return(
        <>
            <Header history={history}/>
            <h1>마이페이지</h1>
            <button>회원탈퇴</button>
            <button>비밀번호 변경</button>
            </>
    );
}

export default MyPage;

// 비밀번호 변경은 보류