import React from 'react';
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../modules/auth";

import Header from "../components/Header";
import ImgSearch from "../components/ImgSearch";

function MainPage(props) {
    const dispatch = useDispatch();
    const onClickHandler = () =>{
        dispatch(logoutUser());
        localStorage.removeItem("token");
        props.history.push("/login");
    };

    return(
        <>
            <Header />
            <ImgSearch />
            <h1>mainpage</h1>
            <button onClick={onClickHandler}>임시 로그아웃</button>
        </>
    );
};

export default withRouter(MainPage);