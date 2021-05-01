import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import Header from '../components/Header';
import ImgSearch from '../components/ImgSearch';

function MainPage({history}) {
    const [input, setInput] = useState('');
    const onChangeHandler = e => {setInput(e.currentTarget.value);};
    const onSearchHandler = () => {
        history.push(`/bs/player/${input}`);
    };

    return(
        <>
            <Header history={history}/>
            <ImgSearch onChangeHandler={onChangeHandler} onSearchHandler={onSearchHandler} />
            <h1>Main Page</h1>
        </>
    );
};

export default withRouter(MainPage);