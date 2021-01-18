import React from 'react';
import mainImg from "../images/mainImg.jpg";
import Header from "../components/Header";
import ImgSearch from "../components/ImgSearch";

function MainPage() {
    return(
        <>
            <Header />
            <div></div>
            {/*<img src={mainImg} alt="mainImg" />*/}
            <ImgSearch />
            <h1>mainpage</h1>
        </>
    );
};

export default MainPage;