import React from 'react';
import Header from "../components/Header";

function ErrorPage({history}) {
    return (
        <>
            <Header history={history}/>
            <span>ERROR! GO BACK TO THE MAIN PAGE!</span>
    </>
    )
}

export default ErrorPage;