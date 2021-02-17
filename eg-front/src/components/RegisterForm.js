import React from 'react';
import {Link} from "react-router-dom";
import styles from '../styles/RegisterForm.module.scss';
import classNames from "classnames/bind";

import logo from "../images/EzggLogo.svg";
import InputItem from "./InputItem";
import {
    EMAIL,
    TEXT,
    PASSWORD,
    PASSWORD_CONFIRM,
    NICKNAME,
    // BS_NICKNAME,
    } from "../utils/types";

const cx = classNames.bind(styles);

function RegisterForm({
                          onEmailHandler,
                          onNicknameHandler,
                          // onBsNicknameHandler,
                          onPasswordHandler,
                          onPasswordConfirmHandler,
                          onClickHandler,
                          onCheckedInputHandler,
                          msg})
{
    const {emailMsg, nicknameMsg, passwordMsg, passwordConfirmMsg, termMsg} = msg;

    const validateCheck = (emailMsg, nicknameMsg, passwordMsg, passwordConfirmMsg, termMsg) => {
      return (!emailMsg && !nicknameMsg && !passwordMsg && !passwordConfirmMsg & !termMsg);
    };// msg가 전부 없으면 true

    return(
        <article className={cx('YellowBg')}>
            <div className={cx('SignupBox')}>
                <img src={logo} alt="logo" />
                <div className={cx('infoBox')}>
                    회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지 회원가입이 완료가 되지 않습니다.
                </div>
                <InputItem
                    type={EMAIL}
                    name={EMAIL}
                    msg={emailMsg}
                    placeholder={"이메일주소"}
                    inputHandler={onEmailHandler}
                />
                <InputItem
                    type={TEXT}
                    name={NICKNAME}
                    msg={nicknameMsg}
                    placeholder={"닉네임"}
                    inputHandler={onNicknameHandler}
                />
                {/*<InputItem*/}
                {/*    type={TEXT}*/}
                {/*    name={BS_NICKNAME}*/}
                {/*    msg={MSG}*/}
                {/*    placeholder={"블랙서바이벌 영원회귀 닉네임(선택)"}*/}
                {/*    inputHandler={onBsNicknameHandler}*/}
                {/*/>*/}
                <InputItem
                    type={PASSWORD}
                    name={PASSWORD}
                    msg={passwordMsg}
                    placeholder={"비밀번호"}
                    inputHandler={onPasswordHandler}
                />
                <InputItem
                    type={PASSWORD}
                    name={PASSWORD_CONFIRM}
                    msg={passwordConfirmMsg}
                    placeholder={"비밀번호 확인"}
                    inputHandler={onPasswordConfirmHandler}
                    onClickHandler={onClickHandler}
                />
                <div className={cx('agreements')}>
                    <input type="checkbox" name="termAgreement" onClick={onCheckedInputHandler}/>
                    <span>
                        Ez.gg의 <Link to="/Agreement" target="_blank">서비스 약관</Link>과 <Link to="/Agreement" target="_blank">개인정보 취급방침</Link>에 동의합니다.</span>
                    <span>{msg.termMsg}</span>
                </div>
                <div>
                    {
                        validateCheck(emailMsg, nicknameMsg, passwordMsg, passwordConfirmMsg, termMsg) ?
                            <button onClick={onClickHandler}>회원 가입</button>
                            :
                            <button className={cx('disableBtn')}>회원 가입</button>
                    }
                </div>
            </div>
        </article>
    );
}
export default RegisterForm;