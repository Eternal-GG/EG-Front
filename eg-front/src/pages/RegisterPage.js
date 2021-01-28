import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";

import {registerUser} from "../modules/auth";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import {validateEmail, validatePassword, validateNickname, validatePasswordConfirm} from "../utils/validate";
import {NULL_INPUT} from "../utils/types";

function RegisterPage(props) {
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

    const onClickHandler = () => {
        const nullCheck = inputsNullCheck(email, nickname, password, passwordConfirm, termChecked);
      if((password === passwordConfirm) && nullCheck){
          let body = {
              email,
              password,
              // bsNickname,
              nickname,
              accountType
          };
          dispatch(registerUser(body)).then(res => {
              alert(`${nickname}님 가입을 축하드립니다!`);
              props.history.push("/");
          })
      }else{
          nullCheck ?
              alert("비밀번호가 일치하지 않습니다.")
              :
              alert("모든 입력 값을 채워주세요.");
      }// register validate 추가하기, api 상에서 에러가 났을 때 조치 취해주기(일단은 가입축하 메세지라도 없애기)
    };

    return(
        <>
            <Header />
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

export default withRouter(RegisterPage);
//TODO 회원가입 테스트 해보기