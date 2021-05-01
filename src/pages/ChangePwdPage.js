import React from 'react';
import Header from "../components/Header";

function ChangePwdPage({history}) {
    return(
        <>
            <Header history={history}/>
            <h1>비밀번호 찾는 페이지</h1>
            <input type="text" placeholder="이메일을 입력하세요"/>
            <button>전송</button>
        </>
    );
}

export default ChangePwdPage;

// 비밀번호 찾기
// 비밀번호 찾는대 비밀번호 안알려주고 재생성하게 만들거임