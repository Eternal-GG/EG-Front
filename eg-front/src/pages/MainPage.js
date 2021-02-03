import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../modules/auth";

import Header from "../components/Header";
import ImgSearch from "../components/ImgSearch";

function MainPage({history}) {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const onClickHandler = () =>{
        dispatch(logoutUser());
        localStorage.removeItem("token");
        history.go(0);
    };
    const onChangeHandler = e => {setInput(e.currentTarget.value);};
    const onSearchHandler = () => {
        history.push(`/bs/player/:${input}`);
    };

    return(
        <>
            <Header history={history}/>
            <ImgSearch onChangeHandler={onChangeHandler} onSearchHandler={onSearchHandler} />
            <h1>Main Page</h1>
            <button onClick={onClickHandler}>임시 로그아웃</button>
        </>
    );
};

export default withRouter(MainPage);