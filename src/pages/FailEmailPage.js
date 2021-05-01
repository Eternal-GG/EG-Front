import React from 'react';
import Header from "../components/Header";
import styles from "../styles/PleaseVerifyEmailPage.module.scss";

function FailEmailPage({history}) {
    return(
        <>
            <Header history={history}/>
            <section className={styles.Wrapper}>
                <article>
                    <span className={styles.fail}>ㅠㅠ</span>
                    <span>이메일 인증에 실패 했습니다.</span>
                </article>
            </section>
        </>
    )
}

export default FailEmailPage;

// 회원가입 > 이메일 인증 후 인증에 실패하면 보게 되는 페이지