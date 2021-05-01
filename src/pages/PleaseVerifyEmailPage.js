import React from 'react';
import Header from '../components/Header';
import emailIcon from '../images/emailIcon.png';
import styles from '../styles/PleaseVerifyEmailPage.module.scss';

function PleaseVerifyEmailPage({history}) {
    return(
        <>
            <Header history={history}/>
            <section className={styles.Wrapper}>
                <article>
                    <img src={emailIcon} alt='이메일 아이콘' />
                    <span>이메일 인증 후 로그인해주세요:)</span>
                </article>
            </section>
        </>
    )
}

export default PleaseVerifyEmailPage;

//css 의존성 해결하기