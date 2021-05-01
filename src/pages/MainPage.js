import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import Header from '../components/Header';
import ImgSearch from '../components/ImgSearch';
import PatchCard from '../components/PatchCard';

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
            <div style={{background: 'rgba(255, 208, 68, 0.2)', minHeight: '100vh', display:"flex", alignItems:'center', flexDirection:'column'}}>
                <PatchCard />
            </div>
        </>
    );
};

export default withRouter(MainPage);