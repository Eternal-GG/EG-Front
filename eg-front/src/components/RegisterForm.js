import React from 'react';
import styles from '../styles/RegisterForm.module.scss';
import classNames from "classnames/bind";
import logo from "../images/EzggLogo.svg";
import {Link} from "react-router-dom";
import InputItem from "./InputItem";

const cx = classNames.bind(styles);

function RegisterForm() {
    const EMAIL = "email";
    const TEXT = "text";
    const PASSWORD = "password";
    const PASSWORDCONFIRM = "passwordConfirm";
    const NICKNAME = "nickname";
    const BSNICKNAME = "BSnickname"

    const MSG = null;

    return(
        <article>
            <div className={cx('SignupBox')}>
                <img src={logo} alt="logo" />
                <div className={cx('infoBox')}>
                    회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지 회원가입이 완료가 되지 않습니다.
                </div>
                <InputItem type={EMAIL} name={EMAIL} msg={MSG} placeholder={"이메일주소"} />
                <InputItem type={TEXT} name={NICKNAME} msg={MSG} placeholder={"닉네임"} />
                <InputItem type={TEXT} name={BSNICKNAME} msg={MSG} placeholder={"블랙서바이벌 영원회귀 닉네임(선택)"} />
                <InputItem type={PASSWORD} name={PASSWORD} msg={MSG} placeholder={"비밀번호"} />
                <InputItem type={PASSWORD} name={PASSWORDCONFIRM} msg={MSG} placeholder={"비밀번호 확인"} />
                <div className={cx('agreements')}>
                    <input type="checkbox" name="termAgreement"/>
                    <span className={cx('agreements')}>
                        Ez.gg의 <Link to="/Agreement" target="_blank">서비스 약관</Link>과 <Link to="/Agreement" target="_blank">개인정보 취급방침</Link>에 동의합니다.</span>
                </div>
                <button>회원 가입</button>
            </div>
        </article>
    );
}
export default RegisterForm;