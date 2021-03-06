import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {registerUser} from "../modules/auth";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import {validateEmail, validatePassword, validateNickname, validatePasswordConfirm} from "../utils/validate";
import {NULL_INPUT} from "../utils/types";

function RegisterPage({history}) {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    // const [bsNickname, setBsNickname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [termChecked, setTermChecked] = useState(false);
    const [msg, setMsg] = useState({
        emailMsg:null,
        nicknameMsg:null,
        passwordMsg:null,
        passwordConfirmMsg:null,
        termMsg:null
    });
    const accountType = 1;
    const dispatch = useDispatch();

    const onEmailHandler = e => {
        const {value} = e.currentTarget;
        if(value){
            const validation = validateEmail(value);
            const {isOk, warnMsg} = validation;
            setEmail(value);

            isOk ?
                setMsg({...msg, emailMsg:null})
                :
                setMsg({...msg, emailMsg:warnMsg});
        }else setMsg({...msg, emailMsg: NULL_INPUT});
    };
    const onNicknameHandler = e => {
        const {value} = e.currentTarget;
        if(value){
            const validation = validateNickname(value);
            const {isOk, warnMsg} = validation;
            setNickname(value);

            isOk ?
                setMsg({...msg, nicknameMsg:null})
                :
                setMsg({...msg, nicknameMsg:warnMsg})
        }else setMsg({...msg, nicknameMsg: NULL_INPUT});
    };
    // const onBsNicknameHandler = e => {
    //     setBsNickname(e.currentTarget.value);
    // };
    const onPasswordHandler = e => {
        const {value} = e.currentTarget;
        if(value){
            const validation = validatePassword(value);
            const isSame = validatePasswordConfirm(value, passwordConfirm);
            const {isOk, warnMsg} = validation;
            setPassword(value);

            if(isOk){
                isSame.isOk ?
                    setMsg({...msg, passwordMsg:null, passwordConfirmMsg: null})
                    :
                    setMsg({...msg, passwordMsg:null, passwordConfirmMsg: isSame.warnMsg});
            }else setMsg({...msg, passwordMsg:warnMsg});
        }else setMsg({...msg, passwordMsg: NULL_INPUT});
    };
    const onPasswordConfirmHandler = e => {
        const {value} = e.currentTarget;
        if(value){
            const validation = validatePasswordConfirm(password, value);
            const {isOk, warnMsg} = validation;
            setPasswordConfirm(value);
            isOk ?
                setMsg({...msg, passwordConfirmMsg:null})
                :
                setMsg({...msg, passwordConfirmMsg:warnMsg});
        }else setMsg({...msg, passwordConfirmMsg: NULL_INPUT})
    };

    const onCheckedInputHandler = e => {
      const {checked} = e.currentTarget;
      if(checked){
          setMsg({...msg, termMsg: null});
          setTermChecked(checked);
      }else{
          setMsg({...msg, termMsg: "약관에 동의해야 가입이 완료됩니다."});
          setTermChecked(checked);
      }
    };

    const inputsNullCheck = (email, nickname, password, passwordConfirm, termChecked) => {
        return (email && nickname && password && passwordConfirm && termChecked);
    };

    const onClickHandler = async () => {
        try{
            const nullCheck = inputsNullCheck(email, nickname, password, passwordConfirm, termChecked);
            if(nullCheck){
                let body = {
                    email,
                    password,
                    // bsNickname,
                    nickname,
                    accountType
                };
                const res = await dispatch(registerUser(body));
                if (res.payload) {history.push('/verification')};
            }else{
                alert("모든 입력 값을 채워주세요.");
            }
        }catch (e) {
            console.error(e);
            history.push('/error')
        }

    };//TODO 이메일, 닉네임 중복확인 api 만들면 중복체크 하기, 일단은 모든 에러는 단순 에러페이지로 보냄

    return(
        <>
            <Header history={history}/>
            <RegisterForm
                onEmailHandler={onEmailHandler}
                onNicknameHandler={onNicknameHandler}
                // onBSNicknameHandler={onBsNicknameHandler}
                onPasswordHandler={onPasswordHandler}
                onPasswordConfirmHandler={onPasswordConfirmHandler}
                onClickHandler={onClickHandler}
                onCheckedInputHandler={onCheckedInputHandler}
                msg={msg}
            />
        </>
            );
}

export default RegisterPage;
// TODO async await으로 수정하기