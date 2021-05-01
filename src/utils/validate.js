const EMAIL_REGEX = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&;])[A-Za-z\d$@$!%*#?&;]{8,16}$/;
const NICKNAME_REGEX = /^([A-Za-zㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9_]){2,12}$/;

const validateEmail = email => {
    let warnMsg = "이메일 형식에 맞게 입력해주세요.";
    return {
        isOk: EMAIL_REGEX.test(email),
        warnMsg
    };
};

const validatePassword = password => {
    let warnMsg="영어 대문자, 소문자, 숫자, 특수문자 중 3종류를 조합하여 8자이상 16자 이하로 입력해주세요.";
    return{
        isOk: PASSWORD_REGEX.test(password),
        warnMsg
    }
};

const validateNickname = nickname => {
    let warnMsg="영어, 한글, 숫자, _ 를 사용하여 2자 이상 12자 이하인 값을 입력해주세요.";
    return{
        isOk: NICKNAME_REGEX.test(nickname),
        warnMsg
    }
};

const validatePasswordConfirm = (password, passwordConfirm) => {
    let warnMsg="비밀번호 확인이 틀렸습니다.";
  return{
      isOk: password === passwordConfirm,
      warnMsg
  }
};

export {validateEmail, validateNickname, validatePassword, validatePasswordConfirm};